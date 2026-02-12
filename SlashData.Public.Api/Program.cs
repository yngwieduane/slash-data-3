using System.Threading.RateLimiting;
using Microsoft.Extensions.Options;
using SlashData.Public.Api.Models;
using SlashData.Public.Api.Options;
using SlashData.Public.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<RecaptchaOptions>(builder.Configuration.GetSection("Recaptcha"));
builder.Services.Configure<EmailOptions>(builder.Configuration.GetSection("Settings:Email"));

builder.Services.AddHttpClient();
builder.Services.AddScoped<IRecaptchaVerifier, GoogleRecaptchaVerifier>();
builder.Services.AddScoped<IEmailSender, MailgunEmailSender>();

var corsOrigins = builder.Configuration.GetSection("Cors:Origins").Get<string[]>()
	?? new[] { "http://localhost:5173" };

builder.Services.AddCors(options =>
{
	options.AddPolicy("Frontend", policy =>
	{
		policy
			.WithOrigins(corsOrigins)
			.AllowAnyHeader()
			.AllowAnyMethod();
	});
});

builder.Services.AddRateLimiter(options =>
{
	options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;

	options.AddPolicy("contact", httpContext =>
	{
		var partitionKey = httpContext.Connection.RemoteIpAddress?.ToString() ?? "unknown";

		return RateLimitPartition.GetFixedWindowLimiter(
			partitionKey: partitionKey,
			factory: _ => new FixedWindowRateLimiterOptions
			{
				PermitLimit = 5,
				Window = TimeSpan.FromMinutes(1),
				QueueProcessingOrder = QueueProcessingOrder.OldestFirst,
				QueueLimit = 0,
				AutoReplenishment = true,
			});
	});
});

var app = builder.Build();

// Serve the built frontend (wwwroot) and keep /api routes on the same host.
app.UseDefaultFiles();
app.UseStaticFiles(new StaticFileOptions
{
	OnPrepareResponse = ctx =>
	{
		var path = ctx.Context.Request.Path.Value ?? string.Empty;

		if (path.EndsWith(".html", StringComparison.OrdinalIgnoreCase))
		{
			ctx.Context.Response.Headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
			ctx.Context.Response.Headers["Pragma"] = "no-cache";
			ctx.Context.Response.Headers["Expires"] = "0";
			return;
		}

		if (path.StartsWith("/assets/", StringComparison.OrdinalIgnoreCase))
		{
			ctx.Context.Response.Headers["Cache-Control"] = "public, max-age=31536000, immutable";
			return;
		}

		ctx.Context.Response.Headers["Cache-Control"] = "public, max-age=604800";
	}
});

app.UseCors("Frontend");
app.UseRateLimiter();

app.MapGet("/health", () => Results.Ok(new { status = "ok" }));

app.MapPost("/api/contact", async (
	ContactRequest request,
	HttpContext httpContext,
	IRecaptchaVerifier recaptchaVerifier,
	IEmailSender emailSender,
	IOptions<RecaptchaOptions> recaptchaOptions,
	ILogger<Program> logger,
	CancellationToken cancellationToken) =>
{
	var recaptchaConfig = recaptchaOptions.Value;

	var validationErrors = request.Validate();

	if (validationErrors.Count > 0)
	{
		return Results.ValidationProblem(validationErrors);
	}

	var remoteIp = httpContext.Connection.RemoteIpAddress?.ToString();
	var expectedAction = recaptchaConfig.ExpectedAction;

	var recaptchaResult = await recaptchaVerifier.VerifyAsync(
		request.RecaptchaToken,
		remoteIp,
		expectedAction,
		cancellationToken);

	if (!recaptchaResult.IsSuccess)
	{
		logger.LogInformation(
			"Contact form blocked by reCAPTCHA. Reason: {Reason}, Score: {Score}, Action: {Action}",
			recaptchaResult.Reason,
			recaptchaResult.Score,
			recaptchaResult.Action);

		return Results.BadRequest(new { message = "reCAPTCHA verification failed." });
	}

	try
	{
		await emailSender.SendContactEmailAsync(request, cancellationToken);
	}
	catch (InvalidOperationException ex)
	{
		logger.LogError(ex, "Email configuration error.");
		return Results.Problem(
			title: "Email service is not configured correctly.",
			statusCode: StatusCodes.Status500InternalServerError);
	}
	catch (Exception ex)
	{
		logger.LogError(ex, "Failed to send contact email.");
		return Results.Problem(
			title: "Failed to send message.",
			statusCode: StatusCodes.Status500InternalServerError);
	}

	return Results.Ok(new
	{
		message = "Thank you for your interest! We will contact you soon."
	});
})
.RequireRateLimiting("contact");

// For SPA routes (e.g. /about), return index.html after API endpoints.
app.MapFallbackToFile("index.html", new StaticFileOptions
{
	OnPrepareResponse = ctx =>
	{
		ctx.Context.Response.Headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
		ctx.Context.Response.Headers["Pragma"] = "no-cache";
		ctx.Context.Response.Headers["Expires"] = "0";
	}
});

app.Run();

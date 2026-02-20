using System.Text.Json;
using SlashData.Public.Api.Models;
using SlashData.Public.Api.Options;
using Microsoft.Extensions.Options;

namespace SlashData.Public.Api.Services;

public sealed class GoogleRecaptchaVerifier : IRecaptchaVerifier
{
    private const string VerifyUrl = "https://www.google.com/recaptcha/api/siteverify";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNameCaseInsensitive = true,
    };

    private readonly IHttpClientFactory _httpClientFactory;
    private readonly RecaptchaOptions _options;
    private readonly ILogger<GoogleRecaptchaVerifier> _logger;

    public GoogleRecaptchaVerifier(
        IHttpClientFactory httpClientFactory,
        IOptions<RecaptchaOptions> options,
        ILogger<GoogleRecaptchaVerifier> logger)
    {
        _httpClientFactory = httpClientFactory;
        _options = options.Value;
        _logger = logger;
    }

    public async Task<RecaptchaVerificationResult> VerifyAsync(
        string token,
        string? remoteIp,
        string expectedAction,
        CancellationToken cancellationToken = default)
    {
        if (string.IsNullOrWhiteSpace(_options.SecretKey))
        {
            _logger.LogWarning("reCAPTCHA secret key is not configured. Skipping verification.");
            return new RecaptchaVerificationResult(true, "reCAPTCHA disabled");
        }

        if (string.IsNullOrWhiteSpace(token))
        {
            return new RecaptchaVerificationResult(false, "Missing reCAPTCHA token.");
        }

        var payload = new Dictionary<string, string>
        {
            ["secret"] = _options.SecretKey,
            ["response"] = token,
        };

        if (!string.IsNullOrWhiteSpace(remoteIp))
        {
            payload["remoteip"] = remoteIp;
        }

        var client = _httpClientFactory.CreateClient(nameof(GoogleRecaptchaVerifier));

        using var content = new FormUrlEncodedContent(payload);
        using var response = await client.PostAsync(VerifyUrl, content, cancellationToken);

        if (!response.IsSuccessStatusCode)
        {
            _logger.LogWarning("reCAPTCHA verification HTTP call failed with status code {StatusCode}.", response.StatusCode);
            return new RecaptchaVerificationResult(false, "reCAPTCHA verification failed.");
        }

        var json = await response.Content.ReadAsStringAsync(cancellationToken);
        var verifyResponse = JsonSerializer.Deserialize<RecaptchaVerifyResponse>(json, JsonOptions);

        if (verifyResponse is null)
        {
            _logger.LogWarning("reCAPTCHA verification response could not be parsed.");
            return new RecaptchaVerificationResult(false, "Invalid reCAPTCHA response.");
        }

        if (!verifyResponse.Success)
        {
            var errorCodes = verifyResponse.ErrorCodes is { Length: > 0 }
                ? string.Join(",", verifyResponse.ErrorCodes)
                : "unknown_error";

            _logger.LogInformation("reCAPTCHA verification failed. Errors: {ErrorCodes}", errorCodes);
            return new RecaptchaVerificationResult(false, $"reCAPTCHA rejected ({errorCodes}).", verifyResponse.Score, verifyResponse.Action);
        }

        if (!string.IsNullOrWhiteSpace(expectedAction) &&
            !string.Equals(verifyResponse.Action, expectedAction, StringComparison.OrdinalIgnoreCase))
        {
            _logger.LogInformation(
                "reCAPTCHA action mismatch. Expected {ExpectedAction} but got {ActualAction}.",
                expectedAction,
                verifyResponse.Action);

            return new RecaptchaVerificationResult(false, "reCAPTCHA action mismatch.", verifyResponse.Score, verifyResponse.Action);
        }

        if (verifyResponse.Score.HasValue && verifyResponse.Score.Value < _options.MinimumScore)
        {
            _logger.LogInformation(
                "reCAPTCHA score {Score} is below minimum {MinimumScore}.",
                verifyResponse.Score.Value,
                _options.MinimumScore);

            return new RecaptchaVerificationResult(false, "reCAPTCHA score too low.", verifyResponse.Score, verifyResponse.Action);
        }

        return new RecaptchaVerificationResult(true, Score: verifyResponse.Score, Action: verifyResponse.Action);
    }
}
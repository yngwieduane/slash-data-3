namespace SlashData.Public.Api.Options;

public sealed class RecaptchaOptions
{
	public string SecretKey { get; init; } = string.Empty;

	// reCAPTCHA v3 returns a score between 0.0 and 1.0.
	public double MinimumScore { get; init; } = 0.5;

	public string ExpectedAction { get; init; } = "contact_form_submit";
}
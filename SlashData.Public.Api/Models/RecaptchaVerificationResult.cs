namespace SlashData.Public.Api.Models;

public sealed record RecaptchaVerificationResult(
    bool IsSuccess,
    string? Reason = null,
    double? Score = null,
    string? Action = null
);
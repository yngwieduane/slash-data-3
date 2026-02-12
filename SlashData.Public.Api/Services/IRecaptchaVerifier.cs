using SlashData.Public.Api.Models;

namespace SlashData.Public.Api.Services;

public interface IRecaptchaVerifier
{
    Task<RecaptchaVerificationResult> VerifyAsync(
        string token,
        string? remoteIp,
        string expectedAction,
        CancellationToken cancellationToken = default);
}
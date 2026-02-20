using System.Text.Json.Serialization;

namespace SlashData.Public.Api.Models;

public sealed class RecaptchaVerifyResponse
{
    [JsonPropertyName("success")]
    public bool Success { get; init; }

    [JsonPropertyName("score")]
    public double? Score { get; init; }

    [JsonPropertyName("action")]
    public string? Action { get; init; }

    [JsonPropertyName("challenge_ts")]
    public DateTimeOffset? ChallengeTimestamp { get; init; }

    [JsonPropertyName("hostname")]
    public string? Hostname { get; init; }

    [JsonPropertyName("error-codes")]
    public string[]? ErrorCodes { get; init; }
}
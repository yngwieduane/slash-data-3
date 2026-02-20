namespace SlashData.Public.Api.Options;

// Matches the existing site’s Mailgun-style settings.
public sealed class EmailOptions
{
    public string ApiKey { get; init; } = string.Empty;
    public string ApiBaseUrl { get; init; } = string.Empty; // e.g. https://api.mailgun.net/v3
    public string DomainName { get; init; } = string.Empty;  // e.g. mg.example.com

    public string FromAddress { get; init; } = string.Empty;
    public string FromDisplayName { get; init; } = string.Empty;

    // Comma-separated lists to mirror the existing configuration.
    public string ToAddresses { get; init; } = string.Empty;
    public string CcAddresses { get; init; } = string.Empty;

    public string SubjectPrefix { get; init; } = "[SlashData Contact]";
}
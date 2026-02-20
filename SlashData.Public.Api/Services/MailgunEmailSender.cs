using System.Net.Http.Headers;
using System.Text;
using Microsoft.Extensions.Options;
using SlashData.Public.Api.Models;
using SlashData.Public.Api.Options;

namespace SlashData.Public.Api.Services;

// Mailgun-style sender aligned with the existing site’s approach.
public sealed class MailgunEmailSender : IEmailSender
{
    private readonly EmailOptions _options;
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly ILogger<MailgunEmailSender> _logger;

    public MailgunEmailSender(
        IOptions<EmailOptions> options,
        IHttpClientFactory httpClientFactory,
        ILogger<MailgunEmailSender> logger)
    {
        _options = options.Value;
        _httpClientFactory = httpClientFactory;
        _logger = logger;
    }

    public async Task SendContactEmailAsync(ContactRequest request, CancellationToken cancellationToken = default)
    {
        EnsureConfigured();

        var endpoint = BuildEndpointUrl();
        var parameters = BuildParameters(request);

        using var httpRequest = new HttpRequestMessage(HttpMethod.Post, endpoint)
        {
            Content = new FormUrlEncodedContent(parameters),
        };

        httpRequest.Headers.Authorization = new AuthenticationHeaderValue("Basic", BuildBasicAuthValue());

        var client = _httpClientFactory.CreateClient(nameof(MailgunEmailSender));

        _logger.LogInformation("Sending Mailgun contact email for {Email} to {Recipients}.", request.Email, _options.ToAddresses);

        using var response = await client.SendAsync(httpRequest, cancellationToken);
        var responseBody = await response.Content.ReadAsStringAsync(cancellationToken);

        if (!response.IsSuccessStatusCode)
        {
            _logger.LogError(
                "Mailgun request failed with status {StatusCode}. Body: {Body}",
                (int)response.StatusCode,
                responseBody);

            throw new InvalidOperationException("Mailgun email request failed.");
        }
    }

    private void EnsureConfigured()
    {
        if (string.IsNullOrWhiteSpace(_options.ApiKey) ||
            string.IsNullOrWhiteSpace(_options.ApiBaseUrl) ||
            string.IsNullOrWhiteSpace(_options.DomainName) ||
            string.IsNullOrWhiteSpace(_options.FromAddress) ||
            string.IsNullOrWhiteSpace(_options.ToAddresses))
        {
            throw new InvalidOperationException(
                "Email settings are incomplete. Configure Email:ApiKey, Email:ApiBaseUrl, Email:DomainName, Email:FromAddress, and Email:ToAddresses.");
        }
    }

    private string BuildEndpointUrl()
    {
        var baseUrl = _options.ApiBaseUrl.TrimEnd('/');
        var domain = _options.DomainName.Trim('/');
        return $"{baseUrl}/{domain}/messages";
    }

    private string BuildBasicAuthValue()
    {
        var raw = $"api:{_options.ApiKey}";
        return Convert.ToBase64String(Encoding.ASCII.GetBytes(raw));
    }

    private List<KeyValuePair<string, string>> BuildParameters(ContactRequest request)
    {
        var parameters = new List<KeyValuePair<string, string>>();

        var from = string.IsNullOrWhiteSpace(_options.FromDisplayName)
            ? _options.FromAddress
            : $"{_options.FromDisplayName} <{_options.FromAddress}>";

        parameters.Add(new KeyValuePair<string, string>("from", from));
        parameters.Add(new KeyValuePair<string, string>("h:sender", _options.FromAddress));

        foreach (var to in SplitAddresses(_options.ToAddresses))
        {
            parameters.Add(new KeyValuePair<string, string>("to", to));
        }

        foreach (var cc in SplitAddresses(_options.CcAddresses))
        {
            parameters.Add(new KeyValuePair<string, string>("cc", cc));
        }

        var subject = $"{_options.SubjectPrefix} {request.Name}".Trim();
        parameters.Add(new KeyValuePair<string, string>("subject", subject));
        parameters.Add(new KeyValuePair<string, string>("html", BuildHtmlBody(request)));

        return parameters;
    }

    private static IEnumerable<string> SplitAddresses(string addresses)
    {
        if (string.IsNullOrWhiteSpace(addresses))
        {
            yield break;
        }

        var parts = addresses.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
        foreach (var part in parts)
        {
            if (!string.IsNullOrWhiteSpace(part))
            {
                yield return part;
            }
        }
    }

    private static string BuildHtmlBody(ContactRequest request)
    {
        var normalizedMessage = request.Message
            .Replace("\r\n", "\n", StringComparison.Ordinal)
            .Replace("\r", "\n", StringComparison.Ordinal)
            .Replace("\n", "<br/>", StringComparison.Ordinal);

        var phone = string.IsNullOrWhiteSpace(request.Phone) ? "(not provided)" : request.Phone;

        return $"Name: {request.Name}<br/>Email: {request.Email}<br/>Phone: {phone}<br/>Message: {normalizedMessage}";
    }
}
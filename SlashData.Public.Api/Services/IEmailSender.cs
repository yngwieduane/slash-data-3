using SlashData.Public.Api.Models;

namespace SlashData.Public.Api.Services;

public interface IEmailSender
{
    Task SendContactEmailAsync(ContactRequest request, CancellationToken cancellationToken = default);
}
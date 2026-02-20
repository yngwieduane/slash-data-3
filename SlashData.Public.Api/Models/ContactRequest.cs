using System.ComponentModel.DataAnnotations;

namespace SlashData.Public.Api.Models;

public sealed class ContactRequest
{
	[Required, MinLength(2), MaxLength(120)]
	public string Name { get; init; } = string.Empty;

	[Required, EmailAddress, MaxLength(200)]
	public string Email { get; init; } = string.Empty;

	[MaxLength(50)]
	public string? Phone { get; init; }

	[Required, MinLength(1), MaxLength(5000)]
	public string Message { get; init; } = string.Empty;

	[Required]
	public string RecaptchaToken { get; init; } = string.Empty;

	public IDictionary<string, string[]> Validate()
	{
		var results = new List<ValidationResult>();
		var context = new ValidationContext(this);
		Validator.TryValidateObject(this, context, results, validateAllProperties: true);

		var errors = new Dictionary<string, List<string>>(StringComparer.OrdinalIgnoreCase);

		foreach (var result in results)
		{
			var memberNames = result.MemberNames?.Any() == true
				? result.MemberNames
				: new[] { string.Empty };

			foreach (var memberName in memberNames)
			{
				if (!errors.TryGetValue(memberName, out var messages))
				{
					messages = new List<string>();
					errors[memberName] = messages;
				}

				messages.Add(result.ErrorMessage ?? "Validation error.");
			}
		}

		return errors.ToDictionary(kvp => kvp.Key, kvp => kvp.Value.ToArray(), StringComparer.OrdinalIgnoreCase);
	}
}
using Server.Domain.Common;

namespace Server.Domain.Entities
{
    public class AppUser : BaseEntity
    {
        public string DisplayName { get; set; } = string.Empty;
        public string FullName { get; set; } = string.Empty;
        public required string AccountId { get; set; }
    }
}

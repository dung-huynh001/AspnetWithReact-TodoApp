using Server.Domain.Common;

namespace Server.Domain.Entities
{
    public class TaskComment : BaseEntity
    {
        public string Comment { get; set; } = string.Empty;
        public required string UserId { get; set; }
        public required AppUser AppUser { get; set; }
        public required string TaskId { get; set; }
        public required Task Task { get; set; }
    }
}

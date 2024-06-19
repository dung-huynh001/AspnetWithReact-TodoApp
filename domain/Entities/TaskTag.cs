using Server.Domain.Common;

namespace Server.Domain.Entities
{
    public class TaskTag : BaseEntity
    {
        public required string TaskId { get; set; }
        public required Task Task { get; set; }
        public required int TagId { get; set; }
        public required Tag Tag { get; set; }
    }
}

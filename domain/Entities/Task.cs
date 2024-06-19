using Server.Domain.Common;

namespace Server.Domain.Entities
{
    public class Task :BaseEntity
    {
        public Task()
        {
            TaskComments = new HashSet<TaskComment>();
            TaskTags = new HashSet<TaskTag>();
        }

        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public Enums.TaskStatus Status { get; set; }
        public DateTime DueTime { get; set; }
        public bool IsCompleted { get; set; }
        public required string UserId { get; set; }
        public required AppUser AppUser { get; set; }
        public ICollection<TaskComment> TaskComments { get; set; }
        public ICollection<TaskTag> TaskTags { get; set; }
    }
}

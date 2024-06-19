using Server.Domain.Common;

namespace Server.Domain.Entities
{
    public class Tag : BaseEntity
    {
        public Tag() 
        { 
            TaskTags = new HashSet<TaskTag>();
        }
        public string Name { get; set; } = string.Empty;
        public ICollection<TaskTag> TaskTags { get; set; }
    }
}

using domain.Enums;

namespace api.Models
{
    public class TaskFilter
    {
        public string SearchValue { get; set; }
        public string Status { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
    }
}

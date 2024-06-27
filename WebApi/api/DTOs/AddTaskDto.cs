using System.ComponentModel.DataAnnotations;

namespace api.DTOs
{
    public class AddTaskDto
    {
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueTime { get; set; }
    }
}

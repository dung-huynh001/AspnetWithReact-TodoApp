using domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace api.DTOs
{
    public class UpdateTaskDto
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueTime { get; set; }
        [Required]
        public int Status { get; set; }
    }
}

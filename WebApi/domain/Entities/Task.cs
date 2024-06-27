using domain.Commons;
using domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace domain.Entities
{
    public class Task : BaseEntity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public STATUS Status { get; set; }
        public DateTime DueDate { get; set; }
        public bool IsCompleted { get; set;}
    }
}

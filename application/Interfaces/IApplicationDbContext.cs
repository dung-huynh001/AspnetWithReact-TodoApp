using Microsoft.EntityFrameworkCore;
using Server.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IApplicationDbContext
    {
        public DbSet<AppUser> AppUsers { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Server.Domain.Entities.Task> Tasks { get; set; }
        public DbSet<TaskTag> TaskTags { get; set; }
        public DbSet<TaskComment> TaskComments { get; set; }
        Task<int> SaveChangeAsync();
    }
}

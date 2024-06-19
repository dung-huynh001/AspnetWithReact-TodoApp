using api.Domain.Common;
using api.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Reflection;

namespace api.Infrastructure.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions opt) : base(opt)
        {
            
        }
        
        public DbSet<AppUser> Users { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Domain.Entities.Task> Tasks { get; set; }
        public DbSet<TaskTag> TaskTags { get; set; }
        public DbSet<TaskComment> TaskComments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            base.OnModelCreating(modelBuilder);
        }

        public virtual async Task<int> SaveChangeAsync()
        {
            foreach(EntityEntry<BaseEntity> entity in base.ChangeTracker.Entries<BaseEntity>()
                .Where(e => e.State == EntityState.Added || e.State == EntityState.Modified))
            {
                entity.Entity.UpdatedAt = DateTime.Now;
                if(entity.State == EntityState.Added)
                {
                    entity.Entity.CreatedAt = DateTime.Now;
                }
            }
            return await base.SaveChangesAsync();
        }
    }
}

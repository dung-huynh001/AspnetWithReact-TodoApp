using domain.Commons;
using domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace infrastructure.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions opt) : base(opt) { }
        public DbSet<domain.Entities.Task> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            base.OnModelCreating(modelBuilder);
        }

        public virtual async Task<int> SaveChangeAsync()
        {
            foreach(var ent in base.ChangeTracker.Entries<BaseEntity>()
                .Where(e => e.State == EntityState.Modified || e.State == EntityState.Added))
            {
                if(ent.State == EntityState.Added)
                {
                    ent.Entity.CreatedDate = DateTime.Now;
                }
                ent.Entity.UpdatedDate = DateTime.Now;
            }
            return await base.SaveChangesAsync();
        }
    }
}

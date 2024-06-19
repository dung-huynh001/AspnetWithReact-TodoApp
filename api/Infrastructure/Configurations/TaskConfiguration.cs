using api.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace api.Infrastructure.Configurations
{
    public class TaskConfiguration : IEntityTypeConfiguration<Domain.Entities.Task>
    {
        public void Configure(EntityTypeBuilder<Domain.Entities.Task> builder)
        {
            builder.HasKey(t => t.Id);

            builder.Property(t => t.Title)
                   .IsRequired()
                   .HasMaxLength(200);

            builder.Property(t => t.Description)
                   .HasMaxLength(1000);

            builder.HasOne(t => t.AppUser)
                   .WithMany()
                   .HasForeignKey(t => t.UserId)
                   .IsRequired();

            builder.HasMany(t => t.TaskComments)
                   .WithOne(tc => tc.Task)
                   .HasForeignKey(tc => tc.TaskId);

            builder.HasMany(t => t.TaskTags)
                   .WithOne(tt => tt.Task)
                   .HasForeignKey(tt => tt.TaskId);
        }
    }
}

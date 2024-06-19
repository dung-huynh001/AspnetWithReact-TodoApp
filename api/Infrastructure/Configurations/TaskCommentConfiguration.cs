using api.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace api.Infrastructure.Configurations
{
    public class TaskCommentConfiguration : IEntityTypeConfiguration<TaskComment>
    {
        public void Configure(EntityTypeBuilder<TaskComment> builder)
        {
            builder.HasKey(tc => tc.Id);

            builder.Property(tc => tc.Comment)
                   .IsRequired()
                   .HasMaxLength(1000);

            builder.HasOne(tc => tc.AppUser)
                   .WithMany()
                   .HasForeignKey(tc => tc.UserId)
                   .IsRequired();

            builder.HasOne(tc => tc.Task)
                   .WithMany(t => t.TaskComments)
                   .HasForeignKey(tc => tc.TaskId);
        }
    }
}

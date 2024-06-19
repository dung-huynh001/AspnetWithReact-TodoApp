using api.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace api.Infrastructure.Configurations
{
    public class TaskTagConfiguration : IEntityTypeConfiguration<TaskTag>
    {
        public void Configure(EntityTypeBuilder<TaskTag> builder)
        {
            builder.HasKey(tt => new { tt.TaskId, tt.TagId });

            builder.HasOne(tt => tt.Task)
                   .WithMany(t => t.TaskTags)
                   .HasForeignKey(tt => tt.TaskId);

            builder.HasOne(tt => tt.Tag)
                   .WithMany(t => t.TaskTags)
                   .HasForeignKey(tt => tt.TagId);
        }
    }
}

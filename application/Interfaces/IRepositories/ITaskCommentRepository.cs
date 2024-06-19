using Server.Domain.Entities;

namespace Server.Interfaces.IRepositories
{
    public interface ITaskCommentRepository : IGenericRepository<TaskComment, string>
    {
    }
}

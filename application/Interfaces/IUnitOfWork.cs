using Server.Domain.Common;
using Server.Interfaces.IRepositories;

namespace Server.Interfaces
{
    public interface IUnitOfWork
    {
        public interface IUnitOfWork : IDisposable
        {
            IGenericRepository<TEntity, TKey> Repository<TEntity, TKey>() where TEntity : BaseEntity;
            IAppUserRepository AppUserRepository { get; }
            ITagRepository TagRepository { get; }
            ITaskRepository TaskRepository { get; }
            ITaskCommentRepository TaskCommentRepository { get; }
            ITaskTagRepository TaskTagRepository { get; }
            void BeginTransaction();
            Task Commit();
            void Rollback();
            Task<int> SaveChangeAsync();
        }
    }
}

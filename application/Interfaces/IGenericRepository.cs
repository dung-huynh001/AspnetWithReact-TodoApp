using Server.Domain.Common;
using System.Linq.Expressions;

namespace Server.Interfaces
{
    public interface IGenericRepository<TEntity, TKey> where TEntity : BaseEntity
    {
        IQueryable<TEntity> GetAll();
        TEntity? GetById(TKey id);
        void Add(TEntity entity);
        void Update(TEntity entity);
        void Delete(TKey id);
        IEnumerable<TEntity> FindMultiple(Expression<Func<TEntity, bool>> predicate);
        int Count();
        bool Exists(TKey id);

        //IQueryable<TEntity> GetAll { get; }
        //Task<TEntity?> GetByIdAsync(TKey key);
        //Task<List<TEntity>> GetAllAsync();
        //Task<bool> DeleteByIdAsync(TKey key);
        //Task AddAsync(TEntity entity);
        //void AddRangeAsync(List<TEntity> entities);
        //Task<bool> UpdateAsync(TEntity entity);
        //Task<bool> DeleteAsync(TEntity entity);
        //void RemoveRange(List<TEntity> entities);
    }
}

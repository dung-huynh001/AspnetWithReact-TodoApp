using Server.Domain.Entities;

namespace Server.Interfaces.IRepositories
{
    public interface IAppUserRepository : IGenericRepository<AppUser, string>
    {
    }
}

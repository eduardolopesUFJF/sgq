using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class AreaRepository : BaseRepository<Area>, IAreaRepository
    {
        private readonly ServiceContext _serviceContext;

        public AreaRepository(ServiceContext context) : base (context)
        {
            _serviceContext = context;
        }
    }
}

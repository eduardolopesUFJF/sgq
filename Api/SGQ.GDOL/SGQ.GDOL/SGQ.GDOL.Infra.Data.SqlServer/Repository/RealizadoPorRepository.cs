using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class RealizadoPorRepository : BaseRepository<RealizadoPor>, IRealizadoPorRepository
    {
        public RealizadoPorRepository(ServiceContext serviceContext) : base(serviceContext)
        {

        }
    }
}

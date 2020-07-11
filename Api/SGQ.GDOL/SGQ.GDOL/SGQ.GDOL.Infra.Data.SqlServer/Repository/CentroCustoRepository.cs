using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class CentroCustoRepository : BaseRepository<CentroCusto>, ICentroCustoRepository
    {
        public CentroCustoRepository(ServiceContext serviceContext) : base (serviceContext)
        {

        }
    }
}

using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class InspecaoRepository : BaseRepository<InspecaoObra>, IInspecaoRepository
    {
        private readonly ServiceContext _serviceContext;

        public InspecaoRepository(ServiceContext serviceContext) : base (serviceContext)
        {
            _serviceContext = serviceContext;
        }
    }
}

using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class EntregaObraClienteRepository : BaseRepository<EntregaObraCliente>, IEntregaObraClienteRepository
    {
        public EntregaObraClienteRepository(ServiceContext serviceContext) : base(serviceContext)
        {

        }
    }
}

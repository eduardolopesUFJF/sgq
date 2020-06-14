using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class ClienteConstrutoraRepository : BaseRepository<ClienteConstrutora>, IClienteConstrutoraRepository
    {
        public ClienteConstrutoraRepository(ServiceContext serviceContext) : base(serviceContext)
        {
            
        }
    }
}

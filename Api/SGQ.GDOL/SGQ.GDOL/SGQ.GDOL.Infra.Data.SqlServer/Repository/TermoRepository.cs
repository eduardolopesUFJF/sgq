using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class TermoRepository : BaseRepository<Termo> , ITermoRepository
    {
        public TermoRepository(ServiceContext serviceContext) : base(serviceContext)
        {

        }
    }
}

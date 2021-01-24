using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class PesquisaSatisfacaoClienteRepository : BaseRepository<PesquisaSatisfacaoCliente> , IPesquisaSatisfacaoClienteRepository
    {
        public PesquisaSatisfacaoClienteRepository(ServiceContext serviceContext) : base (serviceContext)
        {

        }
    }
}

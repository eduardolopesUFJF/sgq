using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class AtendimentoRepository : BaseRepository<Atendimento> , IAtendimentoRepository
    {
        public AtendimentoRepository(ServiceContext serviceContext) : base(serviceContext)
        {

        }
    }
}

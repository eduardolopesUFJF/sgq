using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class CategoriaAssistenciaRepository : BaseRepository<CategoriaAssistencia>, ICategoriaAssistenciaRepository
    {
        public CategoriaAssistenciaRepository(ServiceContext serviceContext) : base (serviceContext)
        {

        }
    }
}

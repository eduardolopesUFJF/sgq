using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class AssistenciaTecnicaArquivoRepository : BaseRepository<AssistenciaTecnicaArquivo> , IAssistenciaTecnicaArquivoRepository
    {
        public AssistenciaTecnicaArquivoRepository(ServiceContext serviceContext) : base (serviceContext)
        {
                
        }

    }
}

using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class LogRepository : BaseRepository<LogAlteracao>, ILogRepository
    {
        public LogRepository(ServiceContext serviceContext) : base(serviceContext)
        {

        }
    }
}

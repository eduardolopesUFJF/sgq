using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class ChecklistServicoRepository : BaseRepository<ChecklistServico>, IChecklistServicoRepository
    {
        private readonly ServiceContext _serviceContext;

        public ChecklistServicoRepository(ServiceContext serviceContext) : base(serviceContext)
        {
            _serviceContext = serviceContext;
        }
    }
}

using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class InspecaoObraItemRepository : BaseRepository<InspecaoObraItem>, IInspecaoObraItemRepository
    {
        public InspecaoObraItemRepository(ServiceContext serviceContext) : base(serviceContext)
        {

        }
    }
}

using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System.Linq;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class EntregaObraClienteChecklistRepository : BaseRepository<EntregaObraClienteChecklist>, IEntregaObraClienteChecklistRepository
    {
        public EntregaObraClienteChecklistRepository(ServiceContext serviceContext) : base(serviceContext)
        {

        }

        public void RemoverAtuais(int entregaObraClienteId)
        {
            var itens = DbSet.Where(x => x.IdEntregaObraCliente == entregaObraClienteId);
            DbSet.RemoveRange(itens);
        }
    }
}

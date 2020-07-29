using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System.Linq;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class EntregaObraClienteTermoRepository : BaseRepository<EntregaObraClienteTermo> , IEntregaObraClienteTermoRepository
    {
        public EntregaObraClienteTermoRepository(ServiceContext serviceContext) : base(serviceContext)
        {

        }

        public void RemoverAtuais(int entregaObraClienteId)
        {
            var itens = DbSet.Where(x => x.IdEntregaObraCliente == entregaObraClienteId);
            DbSet.RemoveRange(itens);
        }
    }
}

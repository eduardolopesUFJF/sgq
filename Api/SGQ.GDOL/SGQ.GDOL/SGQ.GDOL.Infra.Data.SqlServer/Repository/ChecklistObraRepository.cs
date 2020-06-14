using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class ChecklistObraRepository : BaseRepository<ChecklistObra>, IChecklistObraRepository
    {
        public ChecklistObraRepository(ServiceContext context) : base(context)
        {

        }

        public List<ChecklistObra> BuscarComInclude()
        {
            var result = DbSet.Where(x => x.Ativo.HasValue && x.Ativo.Value && x.Delete.HasValue && !x.Delete.Value)
                            .Include(x => x.ItensChecklistEntrega)
                            .OrderBy(x => x.Codigo)
                            .ToList();

            foreach (var item in result)
            {
                item.ItensChecklistEntrega = item.ItensChecklistEntrega.Where(x => x.Delete.HasValue && !x.Delete.Value).ToList();
            }

            return result;
        }
    }
}

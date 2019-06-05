using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class ChecklistServicoRepository : BaseRepository<ChecklistItem>, IChecklistServicoRepository
    {
        private readonly ServiceContext _serviceContext;

        public ChecklistServicoRepository(ServiceContext serviceContext) : base(serviceContext)
        {
            _serviceContext = serviceContext;
        }

        public List<ChecklistItem> BuscarComInclude()
        {
            var result = DbSet.Where(x => x.Ativo.HasValue && x.Ativo.Value)
                            .Include(x => x.ItensChecklistServico)
                            .OrderBy(x => x.Codigo)
                            .ToList();
            
            return result;
        }
    }
}

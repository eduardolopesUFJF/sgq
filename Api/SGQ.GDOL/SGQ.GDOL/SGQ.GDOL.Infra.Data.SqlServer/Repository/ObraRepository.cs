using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class ObraRepository : BaseRepository<Obra>, IObraRepository
    {
        private readonly ServiceContext _serviceContext;

        public ObraRepository(ServiceContext serviceContext) : base(serviceContext)
        {
            _serviceContext = serviceContext;
        }

        public Obra ObterObraComInclude(Obra obra)
        {
            using (var ServiceContext = new ServiceContext())
            {
                var result = ServiceContext.Obra
                        .AsNoTracking()
                        .Include(x => x.CentroCusto)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.ChecklistItem)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.InspecoesObra).ThenInclude(x => x.InspecaoObraItens)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.InspecoesObra).ThenInclude(x => x.FuncionarioAprovado)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.InspecoesObra).ThenInclude(x => x.FuncionarioInspecionado)
                        .Where(x => x.Delete.HasValue && !x.Delete.Value)
                        .FirstOrDefault(x => x.Id == obra.Id);

                return result;
            }
            
        }

        public List<Obra> ObterTodasAtivasSemInclude()
        {
            var result = DbSet.AsNoTracking().Where(x => x.Delete.HasValue && !x.Delete.Value);
            return result.ToList();
        }
    }
}

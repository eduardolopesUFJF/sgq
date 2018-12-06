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
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos)
                        .FirstOrDefault(x => x.Id == obra.Id);

                return result;
            }
            
        }

        public List<Obra> ObterTodasAtivasSemInclude()
        {
            var result = DbSet.AsNoTracking();
            return result.ToList();
        }
    }
}

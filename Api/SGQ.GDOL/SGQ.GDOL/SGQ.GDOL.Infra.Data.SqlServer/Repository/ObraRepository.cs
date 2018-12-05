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

        public List<Obra> ObterTodasAtivasCompletas()
        {
            var result = DbSet
                        .Include(x => x.CentroCusto)
                        .Include(x => x.Areas)
                        .Where(x => x.Delete.HasValue && !x.Delete.Value);
            return result.ToList();
        }
    }
}

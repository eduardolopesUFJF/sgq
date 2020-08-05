using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class ClienteConstrutoraRepository : BaseRepository<ClienteConstrutora>, IClienteConstrutoraRepository
    {
        public ClienteConstrutoraRepository(ServiceContext serviceContext) : base(serviceContext)
        {
            
        }

        public IEnumerable<ClienteConstrutora> BuscarComInclude()
        {
            var result = DbSet.AsNoTracking()
                        .Include(x => x.ClienteCentrosCustos)
                            .ThenInclude(x => x.CentroCusto)
                        .Where(x => x.Delete.HasValue && !x.Delete.Value);

            return result;
        }
    }
}

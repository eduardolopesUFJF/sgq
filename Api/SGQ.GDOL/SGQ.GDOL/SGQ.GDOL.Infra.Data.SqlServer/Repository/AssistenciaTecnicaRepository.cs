using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class AssistenciaTecnicaRepository : BaseRepository<AssistenciaTecnica>, IAssistenciaTecnicaRepository
    {
        public AssistenciaTecnicaRepository(ServiceContext serviceContext) : base (serviceContext)
        {

        }

        public List<AssistenciaTecnica> ObterTodasAtivasComInclude()
        {
            var result = DbSet.AsNoTracking()
                        .Include(x => x.CentroCusto)
                            .ThenInclude(x => x.ClienteCentrosCustos)
                        .Include(x => x.ClienteConstrutora)
                        .Include(x => x.CategoriaAssistencia)
                        .Include(x => x.Atendimentos)
                        .Where(x => !x.Delete).ToList();

            return result;
        }
    }
}

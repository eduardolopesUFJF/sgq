using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class PesquisaSatisfacaoRepository : BaseRepository<PesquisaSatisfacao>, IPesquisaSatisfacaoRepository
    {
        public PesquisaSatisfacaoRepository(ServiceContext serviceContext) : base(serviceContext)
        {

        }

        public List<PesquisaSatisfacao> ObterPesquisas()
        {
            var pesquisas = DbSet.AsNoTracking()
                            .Include(x => x.ItensPesquisaSatisfacao)
                            .Where(x => x.Delete.HasValue && !x.Delete.Value && x.Ativo.HasValue && x.Ativo.Value)
                            .OrderBy(x => x.Codigo).ToList();
            return pesquisas;
        }
    }
}

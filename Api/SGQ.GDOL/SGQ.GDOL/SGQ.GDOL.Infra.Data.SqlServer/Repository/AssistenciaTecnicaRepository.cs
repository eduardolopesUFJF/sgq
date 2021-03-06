﻿using Microsoft.EntityFrameworkCore;
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
                        .Include(x => x.PesquisasSatisfacaoCliente).ThenInclude(x => x.PesquisaSatisfacao)
                        .Include(x => x.PesquisasSatisfacaoCliente).ThenInclude(x => x.ItensPesquisaSatisfacaoCliente).ThenInclude(x => x.ItemPesquisaSatisfacao)
                        .Where(x => !x.Delete).ToList();

            return result;
        }

        public int ObterUltimoCodigoLivre()
        {
            var result = DbSet.AsNoTracking().Where(x => x.Codigo.HasValue)
                        .OrderByDescending(x => x.Codigo).FirstOrDefault();

            return result == null ? 0 : result.Codigo.Value;
        }
    }
}

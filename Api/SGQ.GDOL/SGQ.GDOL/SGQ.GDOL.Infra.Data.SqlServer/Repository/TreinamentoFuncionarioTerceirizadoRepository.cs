using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.TreinamentoRoot.DTO;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using SGQ.GDOL.Domain.TreinamentoRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class TreinamentoFuncionarioTerceirizadoRepository : BaseRepository<TreinamentoFuncionarioTerceirizado>, ITreinamentoFuncionarioTerceirizadoRepository
    {
        protected DbSet<TreinamentoFuncionarioTerceirizado> DbSet;
        public readonly ServiceContext _context;

        public TreinamentoFuncionarioTerceirizadoRepository(ServiceContext serviceContext) : base(serviceContext)
        {
            _context = serviceContext;
            DbSet = _context.Set<TreinamentoFuncionarioTerceirizado>();
        }

        public List<TreinamentoFuncionarioTerceirizadoAgrupadoDTO> ObterTodosAtivos()
        {
            using (var ServiceContext = new ServiceContext())
            {
                var result = ServiceContext.TreinamentoFuncionarioTerceirizado.AsNoTracking()
                    .Include(x => x.Treinamento)
                    .Include(x => x.FuncionarioTerceirizado)
                    .Where(x => !x.Delete).GroupBy(x =>
                        new
                        {
                            x.DataInicio,
                            x.Instrutor,
                            x.Local,
                            x.DiasPrevisaoAvaliacao
                        })
                    .Select(x => new TreinamentoFuncionarioTerceirizadoAgrupadoDTO
                    {
                        IdentificadorSimbolico = x.FirstOrDefault().Id,
                        DataInicio = x.Key.DataInicio,
                        Instrutor = x.Key.Instrutor,
                        Local = x.Key.Local,
                        DiasPrevisaoAvaliacao = x.Key.DiasPrevisaoAvaliacao,
                        Funcionarios = x.Select(y => new TreinamentoFuncionarioTerceirizadoDTO
                        {
                            CargaHoraria = y.CargaHoraria,
                            DataInicio = y.DataInicio,
                            DataPrevisaAvaliacao = y.DataInicio.HasValue ? y.DataInicio.Value.AddDays(y.DiasPrevisaoAvaliacao ?? 0) : y.DataInicio,
                            Delete = y.Delete,
                            DiasPrevisaoAvaliacao = y.DiasPrevisaoAvaliacao,
                            Id = y.Id,
                            IdFuncionario = y.IdFuncionarioTerceirizado,
                            IdTreinamento = y.IdTreinamento,
                            Instrutor = y.Instrutor,
                            Local = y.Local,
                            NomeFuncionario = y.FuncionarioTerceirizado.Nome,
                            NomeTreinamento = y.Treinamento.Nome,
                            Assinatura = y.Assinatura == null || y.Assinatura.Length == 0 ? null : "preenchido"
                        }).OrderBy(y => y.IdFuncionario).ToList()
                    })
                    .OrderByDescending(x => x.DataInicio)
                    .ToList();
                return result;
            }
        }

        public void RemoverTodos(string instrutor, string local, DateTime dataInicio)
        {
            using (var ServiceContext = new ServiceContext())
            {
                var result = ServiceContext.TreinamentoFuncionarioTerceirizado.Where(x =>
                                                                        !string.IsNullOrEmpty(x.Local) && x.Local.Equals(local, StringComparison.InvariantCultureIgnoreCase)
                                                                        && !string.IsNullOrEmpty(x.Instrutor) && x.Instrutor.Equals(instrutor, StringComparison.InvariantCultureIgnoreCase)
                                                                        && x.DataInicio.HasValue && x.DataInicio.Value.Date == dataInicio.Date)
                                                                    .ToList();

                DbSet.RemoveRange(result);
            }
        }
    }
}

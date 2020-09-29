using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.TreinamentoRoot.DTO;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using SGQ.GDOL.Domain.TreinamentoRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class TreinamentoFuncionarioRepository : BaseRepository<TreinamentoFuncionario>, ITreinamentoFuncionarioRepository
    {
        public TreinamentoFuncionarioRepository(ServiceContext serviceContext) : base(serviceContext)
        {

        }

        public List<TreinamentoFuncionarioAgrupadoDTO> ObterTodosAtivos()
        {
            using (var ServiceContext = new ServiceContext())
            {
                var result = ServiceContext.TreinamentoFuncionario.AsNoTracking()
                    .Include(x => x.Treinamento)
                    .Include(x => x.Funcionario)
                    .Where(x => !x.Delete).GroupBy(x =>
                        new
                        {
                            x.DataInicio,
                            x.Instrutor,
                            x.Local,
                            x.DiasPrevisaoAvaliacao
                        })
                    .Select(x => new TreinamentoFuncionarioAgrupadoDTO
                        {
                            IdentificadorSimbolico = x.FirstOrDefault().Id,
                            DataInicio = x.Key.DataInicio,
                            Instrutor = x.Key.Instrutor,
                            Local = x.Key.Local,
                            DiasPrevisaoAvaliacao = x.Key.DiasPrevisaoAvaliacao,
                            Funcionarios = x.Select(y => new TreinamentoFuncionarioDTO
                                {
                                    CargaHoraria = y.CargaHoraria,
                                    DataInicio = y.DataInicio,
                                    DataPrevisaAvaliacao = y.DataInicio.HasValue ? y.DataInicio.Value.AddDays(y.DiasPrevisaoAvaliacao ?? 0) : y.DataInicio,
                                    Delete = y.Delete,
                                    DiasPrevisaoAvaliacao = y.DiasPrevisaoAvaliacao,
                                    Id = y.Id,
                                    IdFuncionario = y.IdFuncionario,
                                    IdTreinamento = y.IdTreinamento,
                                    Instrutor = y.Instrutor,
                                    Local = y.Local,
                                    NomeFuncionario = y.Funcionario.Nome,
                                    NomeTreinamento = y.Treinamento.Nome
                                }).ToList()
                        })
                    .OrderByDescending(x => x.DataInicio)
                    .ToList();

                return result;
            }
        }
    }
}

using SGQ.GDOL.Domain.TreinamentoRoot.DTO;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.TreinamentoRoot.Repository
{
    public interface ITreinamentoFuncionarioTerceirizadoRepository : IBaseRepository<TreinamentoFuncionarioTerceirizado>
    {
        List<TreinamentoFuncionarioTerceirizadoAgrupadoDTO> ObterTodosAtivos();
        void RemoverTodos(string instrutor, string local, DateTime dataInicio);
    }
}

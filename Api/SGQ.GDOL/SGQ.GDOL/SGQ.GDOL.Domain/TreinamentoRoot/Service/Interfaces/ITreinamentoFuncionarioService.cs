using SGQ.GDOL.Domain.TreinamentoRoot.DTO;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.TreinamentoRoot.Service.Interface
{
    public interface ITreinamentoFuncionarioService
    {
        List<TreinamentoFuncionarioAgrupadoDTO> ObterTodosAtivos();
        void Adicionar(TreinamentoFuncionario treinamentoFuncionario);
        void Atualizar(TreinamentoFuncionario treinamentoFuncionario);
        void RemoverTodos(string instrutor, string local, DateTime dataInicio);
        List<TreinamentoFuncionario> Obter(string instrutor, string local, DateTime dataInicio, int idFuncionario);
    }
}

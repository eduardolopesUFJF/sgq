using SGQ.GDOL.Domain.TreinamentoRoot.DTO;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.TreinamentoRoot.Service.Interfaces
{
    public interface ITreinamentoFuncionarioTerceirizadoService
    {
        List<TreinamentoFuncionarioTerceirizadoAgrupadoDTO> ObterTodosAtivos();
        void Adicionar(TreinamentoFuncionarioTerceirizado treinamentoFuncionario);
        void Atualizar(TreinamentoFuncionarioTerceirizado treinamentoFuncionario);
        void RemoverTodos(string instrutor, string local, DateTime dataInicio);
        List<TreinamentoFuncionarioTerceirizado> Obter(string instrutor, string local, DateTime dataInicio, int idFuncionario);
    }
}

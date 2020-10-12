using SGQ.GDOL.Domain.TreinamentoRoot.DTO;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using SGQ.GDOL.Domain.TreinamentoRoot.Repository;
using SGQ.GDOL.Domain.TreinamentoRoot.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Domain.TreinamentoRoot.Service
{
    public class TreinamentoFuncionarioService : ITreinamentoFuncionarioService
    {
        private readonly ITreinamentoFuncionarioRepository _treinamentoFuncionarioRepository;
        private readonly IUnitOfWork _unitOfWork;

        public TreinamentoFuncionarioService(
            ITreinamentoFuncionarioRepository treinamentoFuncionarioRepository,
            IUnitOfWork unitOfWork)
        {
            _treinamentoFuncionarioRepository = treinamentoFuncionarioRepository;
            _unitOfWork = unitOfWork;
        }

        public List<TreinamentoFuncionarioAgrupadoDTO> ObterTodosAtivos()
        {
            var result = _treinamentoFuncionarioRepository.ObterTodosAtivos();
            return result;
        }

        public void Adicionar(TreinamentoFuncionario treinamentoFuncionario)
        {
            _treinamentoFuncionarioRepository.Adicionar(treinamentoFuncionario);
            _unitOfWork.Commit();
        }

        public void RemoverTodos(string instrutor, string local, DateTime dataInicio)
        {
            _treinamentoFuncionarioRepository.RemoverTodos(instrutor, local, dataInicio);
            _unitOfWork.Commit();
        }

        public List<TreinamentoFuncionario> Obter(string instrutor, string local, DateTime dataInicio, int idFuncionario)
        {
            var result = _treinamentoFuncionarioRepository.Buscar(x => 
                                x.Instrutor == instrutor && x.Local == local && x.DataInicio.HasValue && x.DataInicio.Value.Date == dataInicio.Date && x.IdFuncionario == idFuncionario)
                        .ToList();

            return result;
        }

        public void Atualizar(TreinamentoFuncionario treinamentoFuncionario)
        {
            _treinamentoFuncionarioRepository.Update(treinamentoFuncionario);
            _unitOfWork.Commit();
        }
    }
}

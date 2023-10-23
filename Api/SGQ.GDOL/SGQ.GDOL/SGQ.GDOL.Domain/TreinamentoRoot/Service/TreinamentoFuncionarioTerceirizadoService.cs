using SGQ.GDOL.Domain.TreinamentoRoot.DTO;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using SGQ.GDOL.Domain.TreinamentoRoot.Repository;
using SGQ.GDOL.Domain.TreinamentoRoot.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Domain.TreinamentoRoot.Service
{
    public class TreinamentoFuncionarioTerceirizadoService : ITreinamentoFuncionarioTerceirizadoService
    {
        private readonly ITreinamentoFuncionarioTerceirizadoRepository _treinamentoFuncionarioTerceirizadoRepository;
        private readonly IUnitOfWork _unitOfWork;

        public TreinamentoFuncionarioTerceirizadoService(
            ITreinamentoFuncionarioTerceirizadoRepository treinamentoFuncionarioTerceirizadoRepository,
            IUnitOfWork unitOfWork)
        {
            _treinamentoFuncionarioTerceirizadoRepository = treinamentoFuncionarioTerceirizadoRepository;
            _unitOfWork = unitOfWork;
        }

        public List<TreinamentoFuncionarioTerceirizadoAgrupadoDTO> ObterTodosAtivos()
        {
            var result = _treinamentoFuncionarioTerceirizadoRepository.ObterTodosAtivos();
            return result;
        }

        public void Adicionar(TreinamentoFuncionarioTerceirizado treinamentoFuncionarioTerceirizado)
        {
            _treinamentoFuncionarioTerceirizadoRepository.Adicionar(treinamentoFuncionarioTerceirizado);
            _unitOfWork.Commit();
        }

        public void RemoverTodos(string instrutor, string local, DateTime dataInicio)
        {
            _treinamentoFuncionarioTerceirizadoRepository.RemoverTodos(instrutor, local, dataInicio);
            _unitOfWork.Commit();
        }

        public List<TreinamentoFuncionarioTerceirizado> Obter(string instrutor, string local, DateTime dataInicio, int idFuncionario)
        {
            var result = _treinamentoFuncionarioTerceirizadoRepository.Buscar(x =>
                                x.Instrutor == instrutor && x.Local == local && x.DataInicio.HasValue && x.DataInicio.Value.Date == dataInicio.Date && x.IdFuncionarioTerceirizado == idFuncionario)
                        .ToList();

            return result;
        }

        public void Atualizar(TreinamentoFuncionarioTerceirizado treinamentoFuncionarioTerceirizado)
        {
            _treinamentoFuncionarioTerceirizadoRepository.Update(treinamentoFuncionarioTerceirizado);
            _unitOfWork.Commit();
        }
    }
}

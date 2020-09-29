using SGQ.GDOL.Domain.TreinamentoRoot.DTO;
using SGQ.GDOL.Domain.TreinamentoRoot.Repository;
using SGQ.GDOL.Domain.TreinamentoRoot.Service.Interface;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.TreinamentoRoot.Service
{
    public class TreinamentoFuncionarioService : ITreinamentoFuncionarioService
    {
        private readonly ITreinamentoFuncionarioRepository _treinamentoFuncionarioRepository;

        public TreinamentoFuncionarioService(
            ITreinamentoFuncionarioRepository treinamentoFuncionarioRepository)
        {
            _treinamentoFuncionarioRepository = treinamentoFuncionarioRepository;
        }

        public List<TreinamentoFuncionarioAgrupadoDTO> ObterTodosAtivos()
        {
            var result = _treinamentoFuncionarioRepository.ObterTodosAtivos();
            return result;
        }
    }
}

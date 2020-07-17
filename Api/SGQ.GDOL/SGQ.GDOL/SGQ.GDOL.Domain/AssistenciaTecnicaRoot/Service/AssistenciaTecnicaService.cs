using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service
{
    public class AssistenciaTecnicaService : IAssistenciaTecnicaService
    {
        private readonly IAssistenciaTecnicaRepository _assistenciaTecnicaRepository;
        IUnitOfWork _unitOfWork;

        public AssistenciaTecnicaService(
            IAssistenciaTecnicaRepository assistenciaTecnicaRepository,
            IUnitOfWork unitOfWork)
        {
            _assistenciaTecnicaRepository = assistenciaTecnicaRepository;
            _unitOfWork = unitOfWork;
        }

        public List<AssistenciaTecnica> ObterTodosAtivos()
        {
            var result = _assistenciaTecnicaRepository.ObterTodasAtivasComInclude();
            return result;
        }

        public void Adicionar(AssistenciaTecnica assistenciaTecnica)
        {
            _assistenciaTecnicaRepository.Adicionar(assistenciaTecnica);
            _unitOfWork.Commit();
        }

        public void Atualizar(AssistenciaTecnica assistenciaTecnica)
        {
            _assistenciaTecnicaRepository.Update(assistenciaTecnica);
            _unitOfWork.Commit();
        }
    }
}

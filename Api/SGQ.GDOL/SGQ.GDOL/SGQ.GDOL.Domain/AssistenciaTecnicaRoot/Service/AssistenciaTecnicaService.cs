using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service
{
    public class AssistenciaTecnicaService : IAssistenciaTecnicaService
    {
        private readonly IAssistenciaTecnicaRepository _assistenciaTecnicaRepository;

        public AssistenciaTecnicaService(
            IAssistenciaTecnicaRepository assistenciaTecnicaRepository)
        {
            _assistenciaTecnicaRepository = assistenciaTecnicaRepository;
        }

        public List<AssistenciaTecnica> ObterTodosAtivos()
        {
            var result = _assistenciaTecnicaRepository.ObterTodasAtivasComInclude();
            return result;
        }
    }
}

using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service
{
    public class ChecklistObraService : IChecklistObraService
    {
        private readonly IChecklistObraRepository _checklistObraRepository;

        public ChecklistObraService(
            IChecklistObraRepository checklistObraRepository)
        {
            _checklistObraRepository = checklistObraRepository;
        }

        public List<ChecklistObra> ObterTodosAtivos()
        {
            var result = _checklistObraRepository.BuscarComInclude();
            return result.ToList();
        }
    }
}

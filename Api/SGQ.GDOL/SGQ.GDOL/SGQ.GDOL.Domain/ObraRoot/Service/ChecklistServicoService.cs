using System.Collections.Generic;
using System.Linq;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.ObraRoot.Service
{
    public class ChecklistServicoService : IChecklistServicoService
    {
        private readonly IChecklistServicoRepository _checklistServicoRepository;
        private readonly IUnitOfWork _unitOfWork;

        public ChecklistServicoService(
            IChecklistServicoRepository checklistServicoRepository,
            IUnitOfWork unitOfWork)
        {
            _checklistServicoRepository = checklistServicoRepository;
            _unitOfWork = unitOfWork;
        }

        public ChecklistItem Adicionar(ChecklistItem checklist)
        {
            var result = _checklistServicoRepository.AdicionarComRetorno(checklist);
            _unitOfWork.Commit();

            return result;
        }

        public List<ChecklistItem> ObterTodosAtivos()
        {
            var result = _checklistServicoRepository.BuscarComInclude();
            return result.ToList();
        }
    }
}

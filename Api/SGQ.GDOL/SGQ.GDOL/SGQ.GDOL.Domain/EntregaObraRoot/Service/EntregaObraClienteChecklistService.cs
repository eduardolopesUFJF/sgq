using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service
{
    public class EntregaObraClienteChecklistService : IEntregaObraClienteChecklistService
    {
        private readonly IEntregaObraClienteChecklistRepository _entregaObraClienteChecklistRepository;
        private readonly IUnitOfWork _unitOfWork;

        public EntregaObraClienteChecklistService(
            IEntregaObraClienteChecklistRepository entregaObraClienteChecklistRepository,
            IUnitOfWork unitOfWork)
        {
            _entregaObraClienteChecklistRepository = entregaObraClienteChecklistRepository;
            _unitOfWork = unitOfWork;
        }

        public void Adicionar(EntregaObraClienteChecklist entregaObraClienteChecklist)
        {
            _entregaObraClienteChecklistRepository.Adicionar(entregaObraClienteChecklist);
        }

        public void Atualizar(EntregaObraClienteChecklist entregaObraClienteChecklist)
        {
            _entregaObraClienteChecklistRepository.Update(entregaObraClienteChecklist);
        }

        public void RemoverAtuais(int entregaObraClienteId)
        {
            _entregaObraClienteChecklistRepository.RemoverAtuais(entregaObraClienteId);
        }
    }
}

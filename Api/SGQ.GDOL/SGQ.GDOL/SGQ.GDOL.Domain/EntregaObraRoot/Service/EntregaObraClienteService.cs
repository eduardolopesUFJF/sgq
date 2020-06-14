using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service
{
    public class EntregaObraClienteService : IEntregaObraClienteService
    {
        private readonly IEntregaObraClienteRepository _entregaObraClienteRepository;
        private readonly IUnitOfWork _unitOfWork;

        public EntregaObraClienteService(
            IEntregaObraClienteRepository entregaObraClienteRepository,
            IUnitOfWork unitOfWork)
        {
            _entregaObraClienteRepository = entregaObraClienteRepository;
            _unitOfWork = unitOfWork;
        }

        public void Atualizar(EntregaObraCliente entregaObraCliente)
        {
            _entregaObraClienteRepository.Update(entregaObraCliente);
            _unitOfWork.Commit();
        }

        public void Inserir(EntregaObraCliente entregaObraCliente)
        {
            _entregaObraClienteRepository.Adicionar(entregaObraCliente);
            _unitOfWork.Commit();
        }
    }
}

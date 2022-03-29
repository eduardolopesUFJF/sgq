using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;
using System.Linq;

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

        public EntregaObraCliente Inserir(EntregaObraCliente entregaObraCliente)
        {
            var result = _entregaObraClienteRepository.AdicionarComRetorno(entregaObraCliente);
            _unitOfWork.Commit();
            return result;
        }

        public EntregaObraCliente ObterEntregaObraCliente(int idEntregaObraCliente)
        {
            var result = _entregaObraClienteRepository.Buscar(x => x.Id == idEntregaObraCliente).FirstOrDefault();
            return result;
        }
    }
}

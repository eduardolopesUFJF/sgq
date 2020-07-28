using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service
{
    public class EntregaObraClienteOcorrenciaService : IEntregaObraClienteOcorrenciaService
    {
        private readonly IEntregaObraClienteOcorrenciaRepository _entregaObraClienteOcorrenciaRepository;
        private readonly IUnitOfWork _unitOfWork;

        public EntregaObraClienteOcorrenciaService(
                IEntregaObraClienteOcorrenciaRepository entregaObraClienteOcorrenciaRepository,
            IUnitOfWork unitOfWork)
        {
            _entregaObraClienteOcorrenciaRepository = entregaObraClienteOcorrenciaRepository;
            _unitOfWork = unitOfWork;
        }

        public void Adicionar(EntregaObraClienteOcorrencia entregaObraClienteOcorrencia)
        {
            _entregaObraClienteOcorrenciaRepository.Adicionar(entregaObraClienteOcorrencia);
            _unitOfWork.Commit();
        }

        public void Atualizar(EntregaObraClienteOcorrencia entregaObraClienteOcorrencia)
        {
            _entregaObraClienteOcorrenciaRepository.Update(entregaObraClienteOcorrencia);
            _unitOfWork.Commit();
        }
    }
}

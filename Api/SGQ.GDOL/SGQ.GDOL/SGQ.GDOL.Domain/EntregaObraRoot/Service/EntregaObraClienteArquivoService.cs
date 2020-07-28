using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service
{
    public class EntregaObraClienteArquivoService : IEntregaObraClienteArquivoService
    {
        private readonly IEntregaObraClienteArquivoRepository _entregaObraClienteArquivoRepository;
        private readonly IUnitOfWork _unitOfWork;

        public EntregaObraClienteArquivoService(
            IEntregaObraClienteArquivoRepository entregaObraClienteArquivoRepository,
            IUnitOfWork unitOfWork)
        {
            _entregaObraClienteArquivoRepository = entregaObraClienteArquivoRepository;
            _unitOfWork = unitOfWork;
        }

        public void Adicionar(EntregaObraClienteArquivo entregaObraClienteArquivo)
        {
            _entregaObraClienteArquivoRepository.Adicionar(entregaObraClienteArquivo);
            _unitOfWork.Commit();
        }

        public void Atualizar(EntregaObraClienteArquivo entregaObraClienteArquivo)
        {
            _entregaObraClienteArquivoRepository.Update(entregaObraClienteArquivo);
            _unitOfWork.Commit();
        }
    }
}

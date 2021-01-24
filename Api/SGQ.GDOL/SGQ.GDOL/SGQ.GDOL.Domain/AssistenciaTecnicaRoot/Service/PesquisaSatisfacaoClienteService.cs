using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service
{
    public class PesquisaSatisfacaoClienteService : IPesquisaSatisfacaoClienteService
    {
        private readonly IPesquisaSatisfacaoClienteRepository _pesquisaSatisfacaoClienteRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PesquisaSatisfacaoClienteService(
            IPesquisaSatisfacaoClienteRepository pesquisaSatisfacaoClienteRepository,
            IUnitOfWork unitOfWork)
        {
            _pesquisaSatisfacaoClienteRepository = pesquisaSatisfacaoClienteRepository;
            _unitOfWork = unitOfWork;
        }

        public void Adicionar(PesquisaSatisfacaoCliente pesquisaSatisfacaoCliente)
        {
            _pesquisaSatisfacaoClienteRepository.Adicionar(pesquisaSatisfacaoCliente);
            _unitOfWork.Commit();
        }

        public void Atualizar(PesquisaSatisfacaoCliente pesquisaSatisfacaoCliente)
        {
            _pesquisaSatisfacaoClienteRepository.Update(pesquisaSatisfacaoCliente);
            _unitOfWork.Commit();
        }
    }
}

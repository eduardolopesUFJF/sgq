using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service
{
    public class AssistenciaTecnicaArquivoService : IAssistenciaTecnicaArquivoService
    {
        private readonly IAssistenciaTecnicaArquivoRepository _assistenciaTecnicaArquivoRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AssistenciaTecnicaArquivoService(
            IAssistenciaTecnicaArquivoRepository assistenciaTecnicaArquivoRepository,
            IUnitOfWork unitOfWork)
        {
            _assistenciaTecnicaArquivoRepository = assistenciaTecnicaArquivoRepository;
            _unitOfWork = unitOfWork;
        }

        public void Adicionar(AssistenciaTecnicaArquivo assistenciaTecnicaArquivo)
        {
            _assistenciaTecnicaArquivoRepository.Adicionar(assistenciaTecnicaArquivo);
            _unitOfWork.Commit();
        }

        public void Atualizar(AssistenciaTecnicaArquivo assistenciaTecnicaArquivo)
        {
            _assistenciaTecnicaArquivoRepository.Update(assistenciaTecnicaArquivo);
            _unitOfWork.Commit();
        }
    }
}

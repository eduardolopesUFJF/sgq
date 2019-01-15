using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.ObraRoot.Service
{
    public class OcorrenciaService : IOcorrenciaService
    {
        private readonly IOcorrenciaRepository _ocorrenciaRepository;
        private readonly IUnitOfWork _unitOfWork;

        public OcorrenciaService(
            IOcorrenciaRepository ocorrenciaRepository,
            IUnitOfWork unitOfWork
            )
        {
            _ocorrenciaRepository = ocorrenciaRepository;
            _unitOfWork = unitOfWork;
        }

        public void Adicionar(Ocorrencia ocorrencia)
        {
            _ocorrenciaRepository.Adicionar(ocorrencia);
            _unitOfWork.Commit();
        }

        public void Atualizar(Ocorrencia ocorrencia)
        {
            if (ocorrencia.Id != 0)
            {
                _ocorrenciaRepository.Update(ocorrencia);
                _unitOfWork.Commit();
            }
        }
    }
}

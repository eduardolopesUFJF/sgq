using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.ObraRoot.Service
{
    public class RealizadoPorService : IRealizadoPorService
    {
        private readonly IRealizadoPorRepository _realizadoPorRepository;
        private readonly IUnitOfWork _unitOfWork;

        public RealizadoPorService(
            IRealizadoPorRepository realizadoPorRepository,
            IUnitOfWork unitOfWork)
        {
            _realizadoPorRepository = realizadoPorRepository;
            _unitOfWork = unitOfWork;
        }

        public void Adicionar(RealizadoPor realizadoPor)
        {
            _realizadoPorRepository.Adicionar(realizadoPor);
            _unitOfWork.Commit();
        }

        public void Atualizar(RealizadoPor realizadoPor)
        {
            _realizadoPorRepository.Update(realizadoPor);
            _unitOfWork.Commit();
        }
    }
}

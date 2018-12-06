using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.ObraRoot.Service
{
    public class AreaService : IAreaService
    {
        private readonly IAreaRepository _areaRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AreaService(IAreaRepository areaRepository, IUnitOfWork unitOfWork)
        {
            _areaRepository = areaRepository;
            _unitOfWork = unitOfWork;
        }

        public void Adicionar(Area area)
        {
            _areaRepository.Adicionar(area);
            _unitOfWork.Commit();
        }

        public void Atualizar(Area area)
        {
            _areaRepository.Update(area);
            _unitOfWork.Commit();
        }
    }
}

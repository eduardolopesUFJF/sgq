using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.ObraRoot.Service
{
    public class AreaService : IAreaService
    {
        private readonly IAreaRepository _areaRepository;
        private readonly IServicoRepository _servicoRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AreaService(
            IAreaRepository areaRepository,
            IServicoRepository servicoRepository,
            IUnitOfWork unitOfWork)
        {
            _areaRepository = areaRepository;
            _servicoRepository = servicoRepository;
            _unitOfWork = unitOfWork;
        }

        public void Adicionar(Area area)
        {
            _areaRepository.Adicionar(area);
            _unitOfWork.Commit();
        }

        public void Atualizar(Area area)
        {
            if(area.Id != 0)
            {
                _areaRepository.Update(area);
                _unitOfWork.Commit();
            }
        }
    }
}

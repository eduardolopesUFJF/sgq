using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.ObraRoot.Service
{
    public class InspecaoObraItemService : IInspecaoObraItemService
    {
        private readonly IInspecaoObraItemRepository _inspecaoObraItemRepository;
        private readonly IUnitOfWork _unitOfWork;

        public InspecaoObraItemService(
            IInspecaoObraItemRepository inspecaoObraItemRepository,
            IUnitOfWork unitOfWork)
        {
            _inspecaoObraItemRepository = inspecaoObraItemRepository;
            _unitOfWork = unitOfWork;
        }

        public void Atualizar(InspecaoObraItem item)
        {
            _inspecaoObraItemRepository.Update(item);
            _unitOfWork.Commit();
        }
    }
}

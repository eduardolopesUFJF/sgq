using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service
{
    public class LogService : ILogService
    {
        private readonly ILogRepository _logRepository;
        private readonly IUnitOfWork _unitOfWork;

        public LogService(
            ILogRepository logRepository,
            IUnitOfWork unitOfWork)
        {
            _logRepository = logRepository;
            _unitOfWork = unitOfWork;
        }

        public void Adicionar(LogAlteracao log)
        {
            _logRepository.Adicionar(log);
            _unitOfWork.Commit();
        }
    }
}

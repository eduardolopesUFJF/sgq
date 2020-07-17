using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service
{
    public class AtendimentoService : IAtendimentoService
    {
        private readonly IAtendimentoRepository _atendimentoRepository;
        IUnitOfWork _unitOfWork;

        public AtendimentoService(
            IAtendimentoRepository atendimentoRepository,
            IUnitOfWork unitOfWork)
        {
            _atendimentoRepository = atendimentoRepository;
            _unitOfWork = unitOfWork;
        }

        public void Adicionar(Atendimento atendimento)
        {
            _atendimentoRepository.Adicionar(atendimento);
            _unitOfWork.Commit();
        }

        public void Atualizar(Atendimento atendimento)
        {
            _atendimentoRepository.Update(atendimento);
            _unitOfWork.Commit();
        }
    }
}

using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service
{
    public class AssistenciaTecnicaCategoriaService : IAssistenciaTecnicaCategoriaService
    {
        private readonly IAssistenciaTecnicaCategoriaRepository _assistenciaTecnicaCategoriaRepository;
        IUnitOfWork _unitOfWork;

        public AssistenciaTecnicaCategoriaService(
            IAssistenciaTecnicaCategoriaRepository assistenciaTecnicaCategoriaRepository,
            IUnitOfWork unitOfWork)
        {
            _assistenciaTecnicaCategoriaRepository = assistenciaTecnicaCategoriaRepository;
            _unitOfWork = unitOfWork;
        }

        public void AtualizarCategorias(int assistenciaTecnicaId, ICollection<AssistenciaTecnicaCategoria> assistenciaTecnicaCategorias)
        {
            _assistenciaTecnicaCategoriaRepository.AtualizarCategorias(assistenciaTecnicaId, assistenciaTecnicaCategorias);
            _unitOfWork.Commit();
        }
    }
}

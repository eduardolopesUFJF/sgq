using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces
{
    public interface IAssistenciaTecnicaCategoriaService
    {
        void AtualizarCategorias(int assistenciaTecnicaId, ICollection<AssistenciaTecnicaCategoria> assistenciaTecnicaCategorias);
    }
}

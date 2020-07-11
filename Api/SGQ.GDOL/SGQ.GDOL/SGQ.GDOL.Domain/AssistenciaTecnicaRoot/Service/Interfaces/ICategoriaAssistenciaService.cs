using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces
{
    public interface ICategoriaAssistenciaService
    {
        List<CategoriaAssistencia> ObterTodosAtivos();
    }
}

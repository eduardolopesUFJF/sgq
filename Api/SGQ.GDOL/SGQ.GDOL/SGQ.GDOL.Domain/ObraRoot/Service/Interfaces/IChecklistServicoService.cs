using SGQ.GDOL.Domain.ObraRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Service.Interfaces
{
    public interface IChecklistServicoService
    {
        List<ChecklistServico> ObterTodosAtivos();
    }
}

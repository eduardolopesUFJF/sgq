using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Repository
{
    public interface IChecklistServicoRepository : IBaseRepository<ChecklistItem>
    {
        List<ChecklistItem> BuscarComInclude();
    }
}

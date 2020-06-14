using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Repository
{
    public interface IChecklistObraRepository : IBaseRepository<ChecklistObra>
    {
        List<ChecklistObra> BuscarComInclude();
    }
}

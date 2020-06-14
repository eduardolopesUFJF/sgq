using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Repository
{
    public interface IEntregaObraRepository : IBaseRepository<EntregaObra>
    {
        List<EntregaObra> ObterTodasAtivasSemInclude(string usuario);
        EntregaObra ObterComInclude(EntregaObra obra);
    }
}

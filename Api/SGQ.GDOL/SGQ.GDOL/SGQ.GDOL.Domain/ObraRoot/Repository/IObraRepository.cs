using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Repository
{
    public interface IObraRepository : IBaseRepository<Obra>
    {
        List<Obra> ObterTodasAtivasSemInclude(string usuario);
        Obra ObterObraComInclude(Obra obra);
    }
}

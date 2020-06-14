using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces
{
    public interface IEntregaObraService
    {
        List<EntregaObra> ObterTodasAtivasSemInclude(string usuario);
        EntregaObra ObterComInclude(EntregaObra obra);
        void Atualizar(EntregaObra entregaObra);
    }
}

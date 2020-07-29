using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces
{
    public interface ITermoService
    {
        List<Termo> ObterTodosAtivos();
    }
}

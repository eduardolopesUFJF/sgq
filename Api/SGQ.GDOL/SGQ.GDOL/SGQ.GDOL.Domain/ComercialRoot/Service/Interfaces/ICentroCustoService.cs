using SGQ.GDOL.Domain.ComercialRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces
{
    public interface ICentroCustoService
    {
        List<CentroCusto> ObterTodosAtivos();
    }
}

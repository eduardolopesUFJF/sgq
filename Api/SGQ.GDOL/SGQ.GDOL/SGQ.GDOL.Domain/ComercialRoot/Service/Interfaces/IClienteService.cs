using SGQ.GDOL.Domain.ComercialRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces
{
    public interface IClienteService
    {
        List<ConfiguracaoCliente> BuscarTodos(bool appServicos);
    }
}

using SGQ.GDOL.Domain.ComercialRoot.DTO;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces
{
    public interface IClienteService
    {
        List<ClienteDTO> BuscarTodos();
    }
}

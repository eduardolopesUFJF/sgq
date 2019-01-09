using SGQ.GDOL.Domain.UsuarioRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.UsuarioRoot.Repository
{
    public interface IUsuarioCentroCustoRepository : IBaseRepository<UsuarioCentroCusto>
    {
        List<int> ObterCentrosCustoPorUsuario(string usuario);
    }
}

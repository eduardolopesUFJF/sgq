using SGQ.GDOL.Domain.ComercialRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces
{
    public interface IPermissaoService
    {
        List<Permissao> ObterPermissoes(string cliente);
        PermissaoExclusao ObterPermissoesExclusao(string cliente);
    }
}

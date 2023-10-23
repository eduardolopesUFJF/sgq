using SGQ.GDOL.Domain.ComercialRoot.Entity;

namespace SGQ.GDOL.Domain.ComercialRoot.Repository
{
    public interface IPermissaoExclusaoRepository
    {
        PermissaoExclusao ObterPermissoesExclusao(string cliente);
    }
}

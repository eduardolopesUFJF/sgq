using SGQ.GDOL.Domain.RHRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.RHRoot.Repository
{
    public interface IFornecedorRepository : IBaseRepository<Fornecedor>
    {
        List<Fornecedor> ObterTodosAtivos();
    }
}

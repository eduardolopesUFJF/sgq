using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.RHRoot.Entity;
using SGQ.GDOL.Domain.RHRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class FornecedorRepository : BaseRepository<Fornecedor>, IFornecedorRepository
    {
        public FornecedorRepository(ServiceContext serviceContext) : base(serviceContext)
        {

        }

        public List<Fornecedor> ObterTodosAtivos()
        {
            var result = DbSet.Where(x => x.Ativo.HasValue && x.Ativo.Value && x.Delete.HasValue && !x.Delete.Value)
                            .Include(x => x.FuncionariosTerceirizados)
                            .OrderBy(x => x.Nome)
                            .ToList();

            return result;
        }
    }
}

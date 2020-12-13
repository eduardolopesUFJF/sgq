using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class ConfiguracaoClienteRepository : BaseRepository<ConfiguracaoCliente>, IConfiguracaoClienteRepository
    {
        public ConfiguracaoClienteRepository(ServiceContext context) : base (context)
        {

        }
    }
}

using SGQ.GDOL.Domain.RHRoot.Entity;
using SGQ.GDOL.Domain.RHRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class FuncionarioTerceirizadoRepository : BaseRepository<FuncionarioTerceirizado>, IFuncionarioTerceirizadoRepository
    {
        private readonly ServiceContext _serviceContext;

        public FuncionarioTerceirizadoRepository(ServiceContext serviceContext) : base(serviceContext)
        {
            _serviceContext = serviceContext;
        }
    }
}

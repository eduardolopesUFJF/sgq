using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using SGQ.GDOL.Domain.TreinamentoRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class TreinamentoRepository : BaseRepository<Treinamento> , ITreinamentoRepository
    {
        public TreinamentoRepository(ServiceContext serviceContext) : base(serviceContext)
        {

        }
    }
}

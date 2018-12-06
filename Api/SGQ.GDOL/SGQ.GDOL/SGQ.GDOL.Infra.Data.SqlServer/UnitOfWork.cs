using SGQ.GDOL.Domain;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ServiceContext _serviceContext;

        public UnitOfWork(ServiceContext serviceContext)
        {
            _serviceContext = serviceContext;
        }

        public bool Commit()
        {
            return _serviceContext.SaveChanges() > 0;
        }

        public void Dispose()
        {
            _serviceContext.Dispose();
        }
    }
}

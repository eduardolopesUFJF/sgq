namespace SGQ.GDOL.Domain
{
    public interface IUnitOfWork
    {
        bool Commit();
        void Dispose();
    }
}

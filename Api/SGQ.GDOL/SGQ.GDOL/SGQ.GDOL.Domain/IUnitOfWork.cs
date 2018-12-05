namespace SGQ.GDOL.Domain.UsuarioRoot
{
    public interface IUnitOfWork
    {
        bool Commit();
        void Dispose();
    }
}

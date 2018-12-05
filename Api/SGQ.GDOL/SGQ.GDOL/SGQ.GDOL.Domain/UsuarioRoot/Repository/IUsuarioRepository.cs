using SGQ.GDOL.Domain.UsuarioRoot.DTO;
using SGQ.GDOL.Domain.UsuarioRoot.Entity;

namespace SGQ.GDOL.Domain.UsuarioRoot.Repository
{
    public interface IUsuarioRepository : IBaseRepository<Usuario>
    {
        int Logar(UsuarioLoginDTO usuarioLoginDTO);
    }
}

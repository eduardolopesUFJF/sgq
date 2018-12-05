using SGQ.GDOL.Domain.UsuarioRoot.DTO;

namespace SGQ.GDOL.Domain.UsuarioRoot.Service.Interface
{
    public interface IUsuarioService
    {
        int Logar(UsuarioLoginDTO usuarioLoginDTO);
    }
}

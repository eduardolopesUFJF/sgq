using SGQ.GDOL.Domain.UsuarioRoot.DTO;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using SGQ.GDOL.Domain.UsuarioRoot.Service.Interface;

namespace SGQ.GDOL.Domain.UsuarioRoot.Service
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        public int Logar(UsuarioLoginDTO usuarioLoginDTO)
        {
            var result = _usuarioRepository.Logar(usuarioLoginDTO);
            return result;
        }
    }
}

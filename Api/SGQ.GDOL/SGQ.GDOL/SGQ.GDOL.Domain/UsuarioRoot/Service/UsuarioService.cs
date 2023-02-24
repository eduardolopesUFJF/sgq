using SGQ.GDOL.Domain.UsuarioRoot.DTO;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using SGQ.GDOL.Domain.UsuarioRoot.Service.Interface;
using System.Linq;

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

        public int? ObterFuncionarioVinculado(string nomeUsuario)
        {
            var result = _usuarioRepository.ObterFuncionarioVinculado(nomeUsuario);
            return result;
        }

        public int ObterIdFuncionario(string nomeUsuario)
        {
            int id = 0;
            var result = _usuarioRepository.Buscar(x => x.Login.Equals(nomeUsuario, System.StringComparison.InvariantCultureIgnoreCase));
            if (result.Any())
            {
                id = result.FirstOrDefault().Id;
            }
            return id;
        }
    }
}

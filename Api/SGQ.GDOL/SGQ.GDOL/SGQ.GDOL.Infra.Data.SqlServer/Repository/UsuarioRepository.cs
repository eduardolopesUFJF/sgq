using SGQ.GDOL.Domain.UsuarioRoot.DTO;
using SGQ.GDOL.Domain.UsuarioRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class UsuarioRepository : BaseRepository<Usuario>, IUsuarioRepository
    {
        private readonly ServiceContext _serviceContext;

        public UsuarioRepository(ServiceContext serviceContext) : base(serviceContext)
        {
            _serviceContext = serviceContext;
        }

        public int Logar(UsuarioLoginDTO usuarioLoginDTO)
        {
            var usuario = _context.Usuario.Where(x => x.Login == usuarioLoginDTO.Usuario).ToList();
            
            if(!usuario.Any())
            {
                return 0;
            }
            else
            {
                var result = VerificaSenha(usuarioLoginDTO, usuario);
                return result;
            }
        }

        private int VerificaSenha(UsuarioLoginDTO usuarioLoginDTO, List<Usuario> usuarios)
        {
            foreach (var usuario in usuarios)
            {
                if (usuario.Senha.Equals(usuarioLoginDTO.Senha))
                {
                    if (usuario.Delete.HasValue && usuario.Delete.Value)
                    {
                        return 2;
                    }
                    else if (usuario.Bloqueado.HasValue && usuario.Bloqueado.Value)
                    {
                        return 3;
                    }
                    else
                    {
                        return 4;
                    }
                }
            }
            return 1;
        }
    }
}

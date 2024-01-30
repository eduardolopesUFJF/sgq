using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Serilog;
using SGQ.GDOL.Domain.UsuarioRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class UsuarioCentroCustoRepository : BaseRepository<UsuarioCentroCusto>, IUsuarioCentroCustoRepository
    {
        private readonly IUsuarioRepository _usuarioRepository;
        public UsuarioCentroCustoRepository(ServiceContext context, IUsuarioRepository usuarioRepository) : base (context)
        {
            _usuarioRepository = usuarioRepository;
        }

        public List<int> ObterCentrosCustoPorUsuario(string usuario)
        {
            bool possuiLimitacao = _usuarioRepository.PossuiCentroCustoRestrito(usuario);

            List<int> centrosCusto = null;
            if(possuiLimitacao)
            {
                centrosCusto = DbSet.AsNoTracking().Include(x => x.Usuario).Where(x => x.Usuario.Login.ToUpper().Equals(usuario.ToUpper())).Select(x => x.IdCentroCusto).ToList();
            }

            return centrosCusto;
        }
    }
}

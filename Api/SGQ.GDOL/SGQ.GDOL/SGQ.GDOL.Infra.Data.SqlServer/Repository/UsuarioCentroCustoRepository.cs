using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.UsuarioRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class UsuarioCentroCustoRepository : BaseRepository<UsuarioCentroCusto>, IUsuarioCentroCustoRepository
    {
        private readonly ServiceContext _serviceContext;

        public UsuarioCentroCustoRepository(ServiceContext context) : base (context)
        {
            _serviceContext = context;
        }

        public List<int> ObterCentrosCustoPorUsuario(string usuario)
        {
            var possuiLimitacao = _serviceContext.Usuario.FirstOrDefault(x => x.Login.ToUpper().Equals(usuario.ToUpper()) && x.Delete.HasValue && !x.Delete.Value).CentroCustoRestrito;


            List<int> centrosCusto = null;
            if(possuiLimitacao.HasValue && possuiLimitacao.Value)
            {
                centrosCusto = _serviceContext.UsuarioCentroCusto.Include(x => x.Usuario).Where(x => x.Usuario.Login.ToUpper().Equals(usuario.ToUpper())).Select(x => x.IdCentroCusto).ToList();
            }
            
            return centrosCusto;
        }
    }
}

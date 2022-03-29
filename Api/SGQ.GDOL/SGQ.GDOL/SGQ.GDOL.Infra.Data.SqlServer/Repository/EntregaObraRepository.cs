using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class EntregaObraRepository : BaseRepository<EntregaObra>, IEntregaObraRepository
    {
        private readonly IUsuarioCentroCustoRepository _usuarioCentroCustoRepository;

        public EntregaObraRepository(ServiceContext serviceContext, IUsuarioCentroCustoRepository usuarioCentroCustoRepository) : base(serviceContext)
        {
            _usuarioCentroCustoRepository = usuarioCentroCustoRepository;
        }

        public EntregaObra ObterComInclude(EntregaObra entregaObra)
        {
            using (var ServiceContext = new ServiceContext())
            {
                var entregasObraDB = ServiceContext.EntregaObra
                        .AsNoTracking()
                        .Include(x => x.CentroCusto)
                        .Include(x => x.EntregasObrasClientes).ThenInclude(x => x.CentroCusto).ThenInclude(x => x.ClienteCentrosCustos)
                        .Include(x => x.EntregasObrasClientes).ThenInclude(x => x.Ocorrencias).ThenInclude(x => x.EntregaObraClienteChecklist)
                        .Include(x => x.EntregasObrasClientes).ThenInclude(x => x.Termos)
                        .Include(x => x.EntregasObrasClientes).ThenInclude(x => x.ClienteConstrutora)
                        .Include(x => x.EntregasObrasClientes).ThenInclude(x => x.ChecklistObra)
                        .Include(x => x.EntregasObrasClientes).ThenInclude(x => x.FuncionarioInspecao)
                        .Include(x => x.EntregasObrasClientes).ThenInclude(x => x.FuncionarioReinspecao)
                        .Include(x => x.EntregasObrasClientes).ThenInclude(x => x.EntregasObrasClientesChecklists).ThenInclude(x => x.EntregaObraClienteOcorrencias)
                        .Where(x => !x.Delete && x.Id == entregaObra.Id)
                        .FirstOrDefault();

                return entregasObraDB;
            }

        }

        public List<EntregaObra> ObterTodasAtivasSemInclude(string usuario)
        {
            var centrosCusto = _usuarioCentroCustoRepository.ObterCentrosCustoPorUsuario(usuario);

            List<EntregaObra> obras;
            if (centrosCusto == null)
            {
                obras = DbSet.AsNoTracking().Where(x => !x.Delete).ToList();
            }
            else
            {
                obras = DbSet.AsNoTracking().Where(x => !x.Delete && centrosCusto.Any(y => x.IdCentroCusto == y)).ToList();
            }

            return obras;
        }
    }
}

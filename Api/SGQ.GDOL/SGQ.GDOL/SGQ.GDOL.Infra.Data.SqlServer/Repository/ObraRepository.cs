using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class ObraRepository : BaseRepository<Obra>, IObraRepository
    {
        private readonly ServiceContext _serviceContext;
        private readonly IUsuarioCentroCustoRepository _usuarioCentroCustoRepository;

        public ObraRepository(ServiceContext serviceContext, IUsuarioCentroCustoRepository usuarioCentroCustoRepository) : base(serviceContext)
        {
            _serviceContext = serviceContext;
            _usuarioCentroCustoRepository = usuarioCentroCustoRepository;
        }

        public Obra ObterObraComInclude(Obra obra)
        {
            using (var ServiceContext = new ServiceContext())
            {
                var obraDB = ServiceContext.Obra
                        .AsNoTracking()
                        .Include(x => x.CentroCusto)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.ChecklistItem)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.InspecoesObra).ThenInclude(x => x.InspecaoObraItens)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.InspecoesObra).ThenInclude(x => x.Ocorrencias)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.InspecoesObra).ThenInclude(x => x.FuncionarioAprovadoObj)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.InspecoesObra).ThenInclude(x => x.FuncionarioInspecionadoObj)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.InspecoesObra).ThenInclude(x => x.RealizadosPor).ThenInclude(x => x.CentroCusto)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.InspecoesObra).ThenInclude(x => x.RealizadosPor).ThenInclude(x => x.Fornecedor)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.InspecoesObra).ThenInclude(x => x.RealizadosPor).ThenInclude(x => x.RealizadosPorFuncionarios).ThenInclude(x => x.Funcionario)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.InspecoesObra).ThenInclude(x => x.RealizadosPor).ThenInclude(x => x.RealizadosPorFuncionarios).ThenInclude(x => x.FuncionarioTerceirizado)
                        .Where(x => x.Delete.HasValue && !x.Delete.Value && x.Id == obra.Id)
                        .FirstOrDefault();

                return obraDB;
            }
            
        }

        public List<Obra> ObterTodasAtivasSemInclude(string usuario)
        {
            var centrosCusto = _usuarioCentroCustoRepository.ObterCentrosCustoPorUsuario(usuario);

            List<Obra> obras;
            if(centrosCusto == null)
            {
                obras = DbSet.AsNoTracking().Where(x => x.Delete.HasValue && !x.Delete.Value).ToList();
            }
            else
            {
                obras = DbSet.AsNoTracking().Where(x => x.Delete.HasValue && !x.Delete.Value && centrosCusto.Any(y => x.IdCentroCusto == y)).ToList();
            }

            return obras;
        }
    }
}

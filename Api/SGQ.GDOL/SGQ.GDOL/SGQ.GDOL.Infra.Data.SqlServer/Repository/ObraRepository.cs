using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class ObraRepository : BaseRepository<Obra>, IObraRepository
    {
        private readonly ServiceContext _serviceContext;

        public ObraRepository(ServiceContext serviceContext) : base(serviceContext)
        {
            _serviceContext = serviceContext;
        }

        public Obra ObterObraComInclude(Obra obra)
        {
            using (var ServiceContext = new ServiceContext())
            {
                var result = ServiceContext.Obra
                        .AsNoTracking()
                        .Include(x => x.CentroCusto)
                        .Include(x => x.Areas).ThenInclude(x => x.Servicos).ThenInclude(x => x.ChecklistItem)
                        .Where(x => x.Delete.HasValue && !x.Delete.Value)
                        //.Select(y => new Obra
                        //{
                        //    CentroCusto = y.CentroCusto,
                        //    ObraChecklistServicos = y.ObraChecklistServicos,
                        //    Delete = y.Delete,
                        //    Id = y.Id,
                        //    IdCentroCusto = y.IdCentroCusto,
                        //    Status = y.Status,
                        //    Areas = y.Areas.Where(x => x.Delete.HasValue && !x.Delete.Value).Select(z => new Area
                        //    {
                        //        Delete = z.Delete,
                        //        Descricao = z.Descricao,
                        //        Id = z.Id,
                        //        IdObra = z.IdObra,
                        //        Obra = z.Obra,
                        //        Status = z.Status,
                        //        Servicos = z.Servicos.Where(x => x.Delete.HasValue && !x.Delete.Value).Select(w => new Servico
                        //        {
                        //            Delete = w.Delete,
                        //            Id = w.Id,
                        //            IdObra = w.IdObra,
                        //            Obra = w.Obra,
                        //            Status = w.Status,
                        //            Area = w.Area,
                        //            ChecklistItem = w.ChecklistItem,
                        //            DataHoraAlteracao = w.DataHoraAlteracao,
                        //            DataHoraInclusao = w.DataHoraInclusao,
                        //            IdChecklistServico = w.IdChecklistServico,
                        //            IdObraAreaChecklist = w.IdObraAreaChecklist,
                        //            InspecaoObra = w.InspecaoObra,
                        //            MetaAprovacao = w.MetaAprovacao
                        //        })
                        //        .ToList()
                        //    })
                        //    .ToList()
                        //})
                        .FirstOrDefault(x => x.Id == obra.Id);

                return result;
            }
            
        }

        public List<Obra> ObterTodasAtivasSemInclude()
        {
            var result = DbSet.AsNoTracking().Where(x => x.Delete.HasValue && !x.Delete.Value);
            return result.ToList();
        }
    }
}

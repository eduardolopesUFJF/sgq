using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class ServicoRepository : BaseRepository<Servico>, IServicoRepository
    {
        private readonly ServiceContext _serviceContext;

        public ServicoRepository(ServiceContext serviceContext) : base (serviceContext)
        {
            _serviceContext = serviceContext;
        }

        public List<Servico> ObterAtivosComInclude(int areaId)
        {
            var result = _serviceContext.Servico.AsNoTracking().Where(x => x.Delete.HasValue && !x.Delete.Value && x.IdObraAreaChecklist == areaId).ToList();
            return result;
        }
    }
}

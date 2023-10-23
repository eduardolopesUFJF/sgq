using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System.Collections.Generic;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class AssistenciaTecnicaCategoriaRepository : BaseRepository<AssistenciaTecnicaCategoria>, IAssistenciaTecnicaCategoriaRepository
    {
        public AssistenciaTecnicaCategoriaRepository(ServiceContext serviceContext) : base(serviceContext)
        {
            
        }

        public void AtualizarCategorias(int assistenciaTecnicaId, ICollection<AssistenciaTecnicaCategoria> assistenciaTecnicaCategorias)
        {
            var categoriasExistentes = Buscar(x => x.IdAssistenciaTecnica == assistenciaTecnicaId);
            foreach (var categoria in categoriasExistentes)
            {
                Delete(categoria);
            }

            foreach (var categoria in assistenciaTecnicaCategorias)
            {
                Adicionar(categoria);
            }
        }
    }
}

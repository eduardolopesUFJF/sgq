using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service
{
    public class CategoriaAssistenciaService : ICategoriaAssistenciaService
    {
        private readonly ICategoriaAssistenciaRepository _categoriaAssistenciaRepository;

        public CategoriaAssistenciaService(
            ICategoriaAssistenciaRepository categoriaAssistenciaRepository)
        {
            _categoriaAssistenciaRepository = categoriaAssistenciaRepository;
        }

        public List<CategoriaAssistencia> ObterTodosAtivos()
        {
            var result = _categoriaAssistenciaRepository.Buscar(x => x.Ativo).OrderBy(x => x.Nome).ToList();
            return result;
        }
    }
}

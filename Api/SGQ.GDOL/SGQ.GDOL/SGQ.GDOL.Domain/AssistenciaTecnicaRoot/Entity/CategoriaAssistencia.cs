using System.Collections.Generic;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity
{
    public class CategoriaAssistencia : EntityBase
    {
        public string Nome { get; set; }
        public bool Ativo { get; set; }

        public ICollection<AssistenciaTecnica> AssistenciasTecnicas { get; set; }
    }
}

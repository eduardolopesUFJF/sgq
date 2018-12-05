using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Entity
{
    public class ChecklistServico : EntityBase
    {
        public ChecklistServico()
        {
            ItensChecklistServico = new HashSet<ItemChecklistServico>();
            ObrasChecklistServico = new HashSet<ObraChecklistServico>();
        }

        public string Descricao { get; set; }
        public string Codigo { get; set; }
        public bool? Ativo { get; set; }
        public bool? Delete { get; set; }

        public ICollection<ItemChecklistServico> ItensChecklistServico { get; set; }
        public ICollection<ObraChecklistServico> ObrasChecklistServico { get; set; }
    }
}

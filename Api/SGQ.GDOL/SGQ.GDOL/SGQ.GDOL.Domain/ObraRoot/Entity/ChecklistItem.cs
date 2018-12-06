using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Entity
{
    public class ChecklistItem : EntityBase
    {
        public ChecklistItem()
        {
            ItensChecklistServico = new HashSet<ItemChecklistServico>();
            ObrasChecklistServico = new HashSet<Servico>();
        }

        public string Descricao { get; set; }
        public string Codigo { get; set; }
        public bool? Ativo { get; set; }
        public bool? Delete { get; set; }

        public ICollection<ItemChecklistServico> ItensChecklistServico { get; set; }
        public ICollection<Servico> ObrasChecklistServico { get; set; }
    }
}

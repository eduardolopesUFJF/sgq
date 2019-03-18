using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

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
        public string Campo1 { get; set; }
        public string Campo2 { get; set; }
        public string Campo3 { get; set; }
        public string Campo4 { get; set; }
        public string Tipo { get; set; }
        public bool? Ativo { get; set; }
        public bool? Delete { get; set; }

        [NotMapped]
        public string IdGuid { get; set; }

        public ICollection<ItemChecklistServico> ItensChecklistServico { get; set; }
        public ICollection<Servico> ObrasChecklistServico { get; set; }
    }
}

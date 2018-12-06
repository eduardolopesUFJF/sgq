using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Entity
{
    public class Area : EntityBase
    {
        public Area()
        {
            ObraChecklistServico = new HashSet<ObraChecklistServico>();
        }

        public int? IdObra { get; set; }
        public string Descricao { get; set; }
        public int? Status { get; set; }
        public bool? Delete { get; set; }

        public virtual ICollection<ObraChecklistServico> ObraChecklistServico { get; set; }
        public virtual Obra Obra { get; set; }
    }
}

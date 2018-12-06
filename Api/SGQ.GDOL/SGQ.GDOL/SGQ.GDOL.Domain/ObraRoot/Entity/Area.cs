using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Entity
{
    public class Area : EntityBase
    {
        public Area()
        {
            Servicos = new HashSet<Servico>();
        }

        public int? IdObra { get; set; }
        public string Descricao { get; set; }
        public int? Status { get; set; }
        public bool? Delete { get; set; }

        public virtual ICollection<Servico> Servicos { get; set; }
        public virtual Obra Obra { get; set; }
    }
}

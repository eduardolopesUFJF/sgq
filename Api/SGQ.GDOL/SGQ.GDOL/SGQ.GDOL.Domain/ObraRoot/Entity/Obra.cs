using SGQ.GDOL.Domain.ComercialRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Entity
{
    public class Obra : EntityBase
    {
        public Obra()
        {
            ObraChecklistServicos = new HashSet<Servico>();
        }

        public int? IdCentroCusto { get; set; }
        public int? Status { get; set; }
        public bool? Delete { get; set; }

        public virtual CentroCusto CentroCusto { get; set; }
        public virtual ICollection<Servico> ObraChecklistServicos { get; set; }
        public virtual ICollection<Area> Areas { get; set; }
    }
}

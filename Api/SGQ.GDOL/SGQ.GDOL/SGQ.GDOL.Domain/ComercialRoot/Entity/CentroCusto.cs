using SGQ.GDOL.Domain.ObraRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ComercialRoot.Entity
{
    public class CentroCusto : EntityBase
    {
        public string Codigo { get; set; }
        public string Descricao { get; set; }
        public int? Status { get; set; }
        public bool? Delete { get; set; }

        public virtual ICollection<Obra> Obras { get; set; }
    }
}

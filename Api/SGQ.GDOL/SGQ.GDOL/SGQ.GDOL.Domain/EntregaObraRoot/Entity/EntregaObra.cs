using SGQ.GDOL.Domain.ComercialRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Entity
{
    public class EntregaObra : EntityBase
    {
        public int? IdCentroCusto { get; set; }
        public int? Status { get; set; }
        public bool Delete { get; set; }

        public virtual CentroCusto CentroCusto { get; set; }
        public ICollection<EntregaObraCliente> EntregasObrasClientes { get; set; }
    }
}

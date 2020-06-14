using SGQ.GDOL.Domain.ComercialRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Entity
{
    public class ClienteConstrutora : EntityBase
    {
        public string Nome { get; set; }
        public bool? Delete { get; set; }
        public int? IdCentroCusto { get; set; }

        public IEnumerable<EntregaObraCliente> EntregasObrasClientes { get; set; }
    }
}

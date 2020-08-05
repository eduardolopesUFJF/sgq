using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Entity
{
    public class ClienteConstrutora : EntityBase
    {
        public string Nome { get; set; }
        public bool? Delete { get; set; }
        public int? IdCentroCusto { get; set; }

        public virtual IEnumerable<EntregaObraCliente> EntregasObrasClientes { get; set; }
        public virtual IEnumerable<AssistenciaTecnica> AssistenciasTecnicas { get; set; }
        public virtual IEnumerable<ClienteCentroCusto> ClienteCentrosCustos { get; set; }
    }
}

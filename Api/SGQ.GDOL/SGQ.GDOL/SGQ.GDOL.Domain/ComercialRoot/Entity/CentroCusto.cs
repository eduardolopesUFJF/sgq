using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Entity;
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
        public virtual ICollection<UsuarioCentroCusto> Usuarios { get; set; }
        public virtual ICollection<EntregaObra> EntregasObras { get; set; }
        public virtual ICollection<AssistenciaTecnica> AssistenciasTecnicas { get; set; }
        public virtual IEnumerable<ClienteCentroCusto> ClienteCentrosCustos { get; set; }
        public virtual IEnumerable<EntregaObraCliente> EntregasObrasClientes { get; set; }
        public ICollection<RealizadoPor> RealizadosPor { get; set; }
    }
}

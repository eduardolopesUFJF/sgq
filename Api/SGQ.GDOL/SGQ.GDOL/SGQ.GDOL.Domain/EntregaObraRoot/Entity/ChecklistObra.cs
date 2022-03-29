using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Entity
{
    public class ChecklistObra : EntityBase
    {
        public string Codigo { get; set; }
        public string Descricao { get; set; }
        public bool? Ativo { get; set; }
        public bool? Delete { get; set; }
        public string Campo1 { get; set; }
        public string Campo2 { get; set; }
        public string Campo3 { get; set; }
        public string Campo4 { get; set; }

        public IEnumerable<ItemChecklistObra> ItensChecklistEntrega { get; set; }
        public IEnumerable<EntregaObraCliente> EntregasObrasClientes { get; set; }
    }
}

using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Entity
{
    public class ItemChecklistObra
    {
        public int Id { get; set; }
        public string Ordem { get; set; }
        public string Descricao { get; set; }
        public bool? Delete { get; set; }

        public int IdChecklistEntrega { get; set; }
        public virtual ChecklistObra ChecklistEntrega { get; set; }
        public ICollection<EntregaObraClienteChecklist> EntregasObrasClientesChecklists { get; set; }
    }
}

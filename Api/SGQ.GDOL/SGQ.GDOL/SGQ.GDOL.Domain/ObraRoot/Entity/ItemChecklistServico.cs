using System;

namespace SGQ.GDOL.Domain.ObraRoot.Entity
{
    public class ItemChecklistServico : EntityBase
    {
        public int? IdChecklistServico { get; set; }
        public string Ordem { get; set; }
        public string Descricao { get; set; }
        public bool? Delete { get; set; }
        public DateTime? DataHoraInclusao { get; set; }
        public DateTime? DataHoraAlteracao { get; set; }

        public ChecklistItem ChecklistServico { get; set; }
    }
}

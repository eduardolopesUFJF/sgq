using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Entity
{
    public class Servico : EntityBase
    {
        public Servico()
        {
            InspecoesObra = new HashSet<InspecaoObra>();
        }

        public int? IdObra { get; set; }
        public int? IdChecklistServico { get; set; }
        public int? IdObraAreaChecklist { get; set; }
        public decimal? MetaAprovacao { get; set; }
        public int? Status { get; set; }
        public bool? Delete { get; set; }
        public DateTime? DataHoraInclusao { get; set; }
        public DateTime? DataHoraAlteracao { get; set; }

        public virtual ChecklistItem ChecklistItem { get; set; }
        public virtual Area Area { get; set; }
        public virtual Obra Obra { get; set; }
        public virtual ICollection<InspecaoObra> InspecoesObra { get; set; }
    }
}

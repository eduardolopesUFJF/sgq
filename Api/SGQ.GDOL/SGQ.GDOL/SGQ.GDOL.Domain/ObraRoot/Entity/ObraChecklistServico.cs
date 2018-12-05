using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Entity
{
    public class ObraChecklistServico : EntityBase
    {
        public ObraChecklistServico()
        {
            InspecaoObra = new HashSet<InspecaoObra>();
        }

        public int? IdObra { get; set; }
        public int? IdChecklistServico { get; set; }
        public int? IdObraAreaChecklist { get; set; }
        public decimal? MetaAprovacao { get; set; }
        public int? Status { get; set; }
        public bool? Delete { get; set; }
        public DateTime? DataHoraInclusao { get; set; }
        public DateTime? DataHoraAlteracao { get; set; }

        public ChecklistServico ChecklistServico { get; set; }
        public Area Area { get; set; }
        public Obra Obra { get; set; }
        public ICollection<InspecaoObra> InspecaoObra { get; set; }
    }
}

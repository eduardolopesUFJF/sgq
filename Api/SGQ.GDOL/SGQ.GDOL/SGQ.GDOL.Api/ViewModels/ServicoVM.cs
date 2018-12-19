using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class ServicoVM
    {
        public int Id { get; set; }
        public string IdGuidServico { get; set; }
        public string Descricao { get; set; }
        public string Tipo { get; set; }
        public int? IdObra { get; set; }
        public int? IdChecklist { get; set; }
        public int? IdArea { get; set; }
        public decimal? MetaAprovacao { get; set; }
        public int? Status { get; set; }
        public string Situacao { get; set; }
        public bool? Delete { get; set; }
        public DateTime? DataHoraInclusao { get; set; }
        public DateTime? DataHoraAlteracao { get; set; }

        public List<InspecaoObraVM> InspecoesObra { get; set; }
        public List<ItemChecklistServicoVM> ItensChecklistServico { get; set; }
    }
}

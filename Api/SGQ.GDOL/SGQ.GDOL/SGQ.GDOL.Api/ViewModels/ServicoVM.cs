using System;

namespace SGQ.GDOL.Api.ViewModels
{
    public class ServicoVM
    {
        public int Id { get; set; }
        public int? IdObra { get; set; }
        public int? IdChecklistServico { get; set; }
        public int? IdObraAreaChecklist { get; set; }
        public decimal? MetaAprovacao { get; set; }
        public int? Status { get; set; }
        public bool? Delete { get; set; }
        public DateTime? DataHoraInclusao { get; set; }
        public DateTime? DataHoraAlteracao { get; set; }
    }
}

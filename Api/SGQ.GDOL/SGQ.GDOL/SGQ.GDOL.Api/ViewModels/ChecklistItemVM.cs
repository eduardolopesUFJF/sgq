using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class ChecklistItemVM
    {
        public int Id { get; set; }
        public string IdGuid { get; set; }
        public string Codigo { get; set; }
        public string Descricao { get; set; }
        public string Campo1 { get; set; }
        public string Campo2 { get; set; }
        public string Campo3 { get; set; }
        public string Campo4 { get; set; }
        public string Tipo { get; set; }

        public List<ItemChecklistServicoVM> ItensChecklistServico { get; set; }
    }
}

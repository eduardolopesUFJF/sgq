using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class ChecklistItemVM
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public string Tipo { get; set; }

        public List<ItemChecklistServicoVM> ItensChecklistServico { get; set; }
    }
}

using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class ChecklistObraVM
    {
        public int Id { get; set; }
        public string Codigo { get; set; }
        public string Descricao { get; set; }
        public bool Ativo { get; set; }
        public string Campo1 { get; set; }
        public string Campo2 { get; set; }
        public string Campo3 { get; set; }
        public string Campo4 { get; set; }

        public IEnumerable<ItemChecklistObraVM> ItensChecklistEntrega { get; set; }
    }
}

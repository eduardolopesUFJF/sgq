using System;

namespace SGQ.GDOL.Api.ViewModels
{
    public class ItemChecklistServicoVM
    {
        public int Id { get; set; }
        public int? IdServico { get; set; }
        public string Ordem { get; set; }
        public string Descricao { get; set; }
        public bool? Delete { get; set; }
        public DateTime? DataHoraInclusao { get; set; }
        public DateTime? DataHoraAlteracao { get; set; }
    }
}

using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class AreaVM
    {
        public int Id { get; set; }
        public int IdObra { get; set; }
        public string Descricao { get; set; }
        public string Situacao { get; set; }
        public int? Status { get; set; }
        public bool? Delete { get; set; }

        public List<ServicoVM> Servicos { get; set; }
    }
}

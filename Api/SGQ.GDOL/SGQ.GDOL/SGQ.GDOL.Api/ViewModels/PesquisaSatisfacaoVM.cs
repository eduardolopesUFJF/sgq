using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class PesquisaSatisfacaoVM
    {
        public int Id { get; set; }
        public string Codigo { get; set; }
        public string Descricao { get; set; }
        public bool? Delete { get; set; }
        public bool? Ativo { get; set; }
        public List<ItemPesquisaSatisfacaoVM> ItensPesquisaSatisfacao { get; set; }
    }
}

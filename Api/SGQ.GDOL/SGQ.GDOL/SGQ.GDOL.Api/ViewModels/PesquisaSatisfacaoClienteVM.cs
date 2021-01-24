using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class PesquisaSatisfacaoClienteVM
    {
        public int Id { get; set; }
        public string IdGuid { get; set; }
        public int IdPesquisaSatisfacao { get; set; }
        public string DescricaoPesquisaSatisfacao { get; set; }
        public int Status { get; set; }
        public DateTime? Data { get; set; }
        public int? TotalPontos { get; set; }
        public decimal? Percentual { get; set; }
        public bool? Delete { get; set; }
        public int? IdAssistenciaTecnica { get; set; }
        public string IdGuidAssistenciaTecnica { get; set; }
        public List<ItemPesquisaSatisfacaoClienteVM> ItensPesquisaSatisfacaoCliente { get; set; }
    }
}

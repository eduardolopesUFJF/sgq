using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity
{
    public class PesquisaSatisfacaoCliente : EntityBase
    {
        public int IdPesquisaSatisfacao { get; set; }
        public virtual PesquisaSatisfacao PesquisaSatisfacao { get; set; }
        public int Status { get; set; }
        public DateTime? Data { get; set; }
        public int? TotalPontos { get; set; }
        public decimal? Percentual { get; set; }
        public bool? Delete { get; set; }
        public int? IdAssistenciaTecnica { get; set; }
        public virtual AssistenciaTecnica AssistenciaTecnica { get; set; }
        public ICollection<ItemPesquisaSatisfacaoCliente> ItensPesquisaSatisfacaoCliente { get; set; }
    }
}

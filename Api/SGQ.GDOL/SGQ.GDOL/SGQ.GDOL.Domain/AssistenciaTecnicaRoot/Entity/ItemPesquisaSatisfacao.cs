using System.Collections.Generic;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity
{
    public class ItemPesquisaSatisfacao : EntityBase
    {
        public int IdPesquisaSatisfacao { get; set; }
        public virtual PesquisaSatisfacao PesquisaSatisfacao { get; set; }
        public string Ordem { get; set; }
        public string Descricao { get; set; }
        public bool? Delete { get; set; }
        public ICollection<ItemPesquisaSatisfacaoCliente> ItensPesquisaSatisfacaoCliente { get; set; }
    }
}

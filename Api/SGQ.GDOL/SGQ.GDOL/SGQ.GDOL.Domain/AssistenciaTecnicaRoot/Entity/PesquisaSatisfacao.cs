using System.Collections.Generic;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity
{
    public class PesquisaSatisfacao : EntityBase
    {
        public string Codigo { get; set; }
        public string Descricao { get; set; }
        public bool? Delete { get; set; }
        public bool? Ativo { get; set; }
        public ICollection<ItemPesquisaSatisfacao> ItensPesquisaSatisfacao { get; set; }
    }
}

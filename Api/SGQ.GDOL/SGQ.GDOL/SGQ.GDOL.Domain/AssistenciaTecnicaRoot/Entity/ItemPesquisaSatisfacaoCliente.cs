namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity
{
    public class ItemPesquisaSatisfacaoCliente : EntityBase
    {
        public int IdPesquisaSatisfacaoCliente { get; set; }
        public virtual PesquisaSatisfacaoCliente PesquisaSatisfacaoCliente { get; set; }
        public int IdPesquisaSatisfacao { get; set; }
        public virtual PesquisaSatisfacao PesquisaSatisfacao { get; set; }
        public int IdItemPesquisaSatisfacao { get; set; }
        public virtual ItemPesquisaSatisfacao ItemPesquisaSatisfacao { get; set; }
        public int? Nota { get; set; }
        public bool? Delete { get; set; }
    }
}

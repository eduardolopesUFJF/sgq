namespace SGQ.GDOL.Api.ViewModels
{
    public class ItemPesquisaSatisfacaoClienteVM
    {
        public int Id { get; set; }
        public int IdPesquisaSatisfacaoCliente { get; set; }
        public int IdPesquisaSatisfacao { get; set; }
        public int IdItemPesquisaSatisfacao { get; set; }
        public string DescricaoItemPesquisaSatisfacao { get; set; }
        public int? Nota { get; set; }
        public bool? Delete { get; set; }
    }
}

namespace SGQ.GDOL.Api.ViewModels
{
    public class ItemPesquisaSatisfacaoVM
    {
        public int Id { get; set; }
        public int IdPesquisaSatisfacao { get; set; }
        public string Ordem { get; set; }
        public string Descricao { get; set; }
        public bool? Delete { get; set; }
    }
}

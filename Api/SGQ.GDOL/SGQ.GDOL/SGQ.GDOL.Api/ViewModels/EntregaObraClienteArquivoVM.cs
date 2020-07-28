namespace SGQ.GDOL.Api.ViewModels
{
    public class EntregaObraClienteArquivoVM
    {
        public int Id { get; set; }
        public string IdGuid { get; set; }
        public int IdEntregaObraCliente { get; set; }
        public string IdGuidEntregaObraCliente { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Arquivo { get; set; }
        public bool Delete { get; set; }
    }
}

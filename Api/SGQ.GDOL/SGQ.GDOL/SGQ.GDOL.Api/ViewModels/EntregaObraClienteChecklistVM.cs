namespace SGQ.GDOL.Api.ViewModels
{
    public class EntregaObraClienteChecklistVM
    {
        public int Id { get; set; }
        public int IdEntregaObraCliente { get; set; }
        public int IdItemChecklistEntrega { get; set; }
        public string OrdemItemChecklistEntrega { get; set; }
        public string DescricaoItemChecklistEntrega { get; set; }
        public string Inspecao1 { get; set; }
        public string Inspecao2 { get; set; }
        public bool? Delete { get; set; }
    }
}

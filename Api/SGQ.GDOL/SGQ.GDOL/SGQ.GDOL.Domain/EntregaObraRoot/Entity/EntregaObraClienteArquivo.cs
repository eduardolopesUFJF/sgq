namespace SGQ.GDOL.Domain.EntregaObraRoot.Entity
{
    public class EntregaObraClienteArquivo : EntityBase
    {
        public int IdEntregaObraCliente { get; set; }
        public virtual EntregaObraCliente EntregaObraCliente { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public byte[] Arquivo { get; set; }
        public bool Delete { get; set; }
    }
}

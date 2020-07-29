namespace SGQ.GDOL.Domain.EntregaObraRoot.Entity
{
    public class EntregaObraClienteTermo : EntityBase
    {
        public int IdEntregaObraCliente { get; set; }
        public virtual EntregaObraCliente EntregaObraCliente { get; set; }
        public int IdTermo { get; set; }
        public virtual Termo Termo { get; set; }
        public bool Delete { get; set; }
    }
}

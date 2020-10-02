namespace SGQ.GDOL.Domain.EntregaObraRoot.Entity
{
    public class EntregaObraClienteChecklist : EntityBase
    {
        public int IdEntregaObraCliente { get; set; }
        public virtual EntregaObraCliente EntregaObraCliente { get; set; }
        public int IdItemChecklistEntrega { get; set; }
        public virtual ItemChecklistObra ItemChecklistObra { get; set; }
        public int IdChecklistEntrega { get; set; }
        public string Inspecao1 { get; set; }
        public string Inspecao2 { get; set; }
        public string Descricao { get; set; }
        public string Ordem { get; set; }
        public bool? Delete { get; set; }
    }
}

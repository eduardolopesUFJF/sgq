namespace SGQ.GDOL.Domain.ComercialRoot.Entity
{
    public class ConfiguracaoCliente : EntityBase
    {
        public string Nome { get; set; }
        public bool AcessoChecklist { get; set; }
        public bool AcessoServico { get; set; }
        public bool AcessoServicoTreinamento { get; set; }
        public bool AcessoServicoEntregaObras { get; set; }
        public bool AcessoServicoAssistenciaTecnica { get; set; }
    }
}

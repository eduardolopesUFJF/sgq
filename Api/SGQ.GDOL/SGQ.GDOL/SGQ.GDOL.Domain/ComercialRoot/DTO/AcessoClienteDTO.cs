namespace SGQ.GDOL.Domain.ComercialRoot.DTO
{
    public class AcessoClienteDTO
    {
        public string NomeCliente { get; set; }
        public int QuantidadeAcessosChecklist { get; set; }
        public int QuantidadeAcessosServicos { get; set; }
        public int QuantidadeAcessosServicosEntregaObra { get; set; }
        public int QuantidadeAcessosServicosAssistenciaTecnica { get; set; }
        public int QuantidadeAcessosServicosTreinamento { get; set; }
    }
}

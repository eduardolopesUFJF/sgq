namespace SGQ.GDOL.Api.ViewModels
{
    public class ClienteCentroCustoVM
    {
        public int Id { get; set; }
        public int IdCliente { get; set; }
        public int IdCentroCusto { get; set; }
        public string DescricaoCentroCusto { get; set; }
        public string Unidade { get; set; }
        public bool Principal { get; set; }
        public bool Delete { get; set; }
    }
}

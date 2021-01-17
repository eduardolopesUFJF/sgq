namespace SGQ.GDOL.Api.ViewModels
{
    public class RealizadoPorFuncionarioVM
    {
        public int Id { get; set; }
        public int IdExecutadoPor { get; set; }
        public int? IdFuncionario { get; set; }
        public int? IdFuncionarioTerceirizado { get; set; }
    }
}

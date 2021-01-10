namespace SGQ.GDOL.Api.ViewModels
{
    public class FuncionarioTerceirizadoVM
    {
        public int Id { get; set; }
        public int IdFornecedor { get; set; }
        public string Nome { get; set; }
        public bool? Delete { get; set; }
        public bool? Ativo { get; set; }
    }
}

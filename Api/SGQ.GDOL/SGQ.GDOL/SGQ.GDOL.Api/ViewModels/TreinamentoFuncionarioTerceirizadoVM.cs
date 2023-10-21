using System;

namespace SGQ.GDOL.Api.ViewModels
{
    public class TreinamentoFuncionarioTerceirizadoVM
    {
        public int Id { get; set; }
        public DateTime DataInicio { get; set; }
        public int? CargaHoraria { get; set; }
        public string Instrutor { get; set; }
        public string Local { get; set; }
        public int DiasPrevisaoAvaliacao { get; set; }
        public DateTime DataPrevisaAvaliacao { get; set; }
        public bool Delete { get; set; }
        public int IdFuncionario { get; set; }
        public string NomeFuncionario { get; set; }
        public int IdTreinamento { get; set; }
        public string NomeTreinamento { get; set; }
        public string Assinatura { get; set; }
    }
}

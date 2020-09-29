using SGQ.GDOL.Domain.RHRoot.Entity;
using System;

namespace SGQ.GDOL.Domain.TreinamentoRoot.Entity
{
    public class TreinamentoFuncionario : EntityBase
    {
        public DateTime? DataInicio { get; set; }
        public int? CargaHoraria { get; set; }
        public string Instrutor { get; set; }
        public string Local { get; set; }
        public int? DiasPrevisaoAvaliacao { get; set; }
        public int IdFuncionario { get; set; }
        public virtual Funcionario Funcionario { get; set; }
        public int IdTreinamento { get; set; }
        public virtual Treinamento Treinamento { get; set; }
        public DateTime? DataPrevisaoAvaliacao { get; set; }
        public bool Delete { get; set; }

    }
}

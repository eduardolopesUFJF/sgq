using SGQ.GDOL.Domain.RHRoot.Entity;
using System;

namespace SGQ.GDOL.Domain.TreinamentoRoot.Entity
{
    public class TreinamentoFuncionarioTerceirizado : EntityBase
    {
        public DateTime? DataInicio { get; set; }
        public int? CargaHoraria { get; set; }
        public string Instrutor { get; set; }
        public string Local { get; set; }
        public int? DiasPrevisaoAvaliacao { get; set; }
        public int IdFuncionarioTerceirizado { get; set; }
        public virtual FuncionarioTerceirizado FuncionarioTerceirizado { get; set; }
        public int IdTreinamento { get; set; }
        public virtual Treinamento Treinamento { get; set; }
        public DateTime? DataPrevisaoAvaliacao { get; set; }
        public bool Delete { get; set; }
        public byte[] Assinatura { get; set; }
    }
}

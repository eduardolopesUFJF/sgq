using SGQ.GDOL.Domain.RHRoot.Entity;
using System;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity
{
    public class Atendimento : EntityBase
    {
        public int IdAssistenciaTecnica { get; set; }
        public virtual AssistenciaTecnica AssistenciaTecnica { get; set; }
        public int Tipo { get; set; }
        public string Descricao { get; set; }
        public DateTime? DataInicio { get; set; }
        public DateTime? DataTermino { get; set; }
        public string Observacoes { get; set; }
        public int? IdFuncionario { get; set; }
        public virtual Funcionario Funcionario { get; set; }
        public string ResponsavelCliente { get; set; }
        public bool Delete { get; set; }
    }
}

using SGQ.GDOL.Domain.RHRoot.Entity;

namespace SGQ.GDOL.Domain.ObraRoot.Entity
{
    public class RealizadoPorFuncionario : EntityBase
    {
        public int IdRealizadoPor { get; set; }
        public virtual RealizadoPor RealizadosPor { get; set; }
        public int? IdFuncionario { get; set; }
        public virtual Funcionario Funcionario { get; set; }
        public int? IdFuncionarioTerceirizado { get; set; }
        public virtual FuncionarioTerceirizado FuncionarioTerceirizado { get; set; }
        public bool? Delete { get; set; }
    }
}

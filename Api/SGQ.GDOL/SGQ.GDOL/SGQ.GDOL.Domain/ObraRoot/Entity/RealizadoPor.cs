using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.RHRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Entity
{
    public class RealizadoPor : EntityBase
    {
        public RealizadoPor()
        {
            RealizadosPorFuncionarios = new HashSet<RealizadoPorFuncionario>();
        }

        public int IdInspecao { get; set; }
        public int TipoFuncionario { get; set; }
        public int? IdFornecedor { get; set; }
        public virtual Fornecedor Fornecedor { get; set; }
        public int? IdCentroCusto { get; set; }
        public virtual CentroCusto CentroCusto { get; set; }
        public bool? Delete { get; set; }
        public virtual InspecaoObra InspecaoObra { get; set; }
        public ICollection<RealizadoPorFuncionario> RealizadosPorFuncionarios { get; set; }
    }
}

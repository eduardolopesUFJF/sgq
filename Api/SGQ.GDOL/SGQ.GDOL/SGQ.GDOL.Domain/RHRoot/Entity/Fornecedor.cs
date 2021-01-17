using SGQ.GDOL.Domain.ObraRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.RHRoot.Entity
{
    public class Fornecedor : EntityBase
    {
        public string Nome { get; set; }
        public bool? Delete { get; set; }
        public bool? Ativo { get; set; }

        public ICollection<FuncionarioTerceirizado> FuncionariosTerceirizados { get; set; }
        public ICollection<RealizadoPor> RealizadosPor { get; set; }
    }
}

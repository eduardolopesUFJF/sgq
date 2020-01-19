using SGQ.GDOL.Domain.ObraRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.RHRoot.Entity
{
    public class Funcionario : EntityBase
    {
        public string Nome { get; set; }
        public bool? Delete { get; set; }
        public int? IdCentroCusto { get; set; }

        public ICollection<InspecaoObra> FuncionariosAprovado { get; set; }
        public ICollection<InspecaoObra> FuncionariosInspecionado { get; set; }
    }
}

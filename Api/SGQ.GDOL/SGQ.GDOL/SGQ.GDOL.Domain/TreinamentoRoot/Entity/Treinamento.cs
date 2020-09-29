using System.Collections.Generic;

namespace SGQ.GDOL.Domain.TreinamentoRoot.Entity
{
    public class Treinamento : EntityBase
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public int? CargaHoraria { get; set; }
        public bool? Ativo { get; set; }

        public ICollection<TreinamentoFuncionario> TreinamentosFuncionarios { get; set; }
    }
}

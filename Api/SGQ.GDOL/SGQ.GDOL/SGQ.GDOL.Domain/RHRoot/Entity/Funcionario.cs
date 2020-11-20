using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.RHRoot.Entity
{
    public class Funcionario : EntityBase
    {
        public string Nome { get; set; }
        public bool? Delete { get; set; }
        public int? IdCentroCusto { get; set; }

        public bool Demitido { get; set; }

        public ICollection<InspecaoObra> FuncionariosAprovado { get; set; }
        public ICollection<InspecaoObra> FuncionariosInspecionado { get; set; }

        public IEnumerable<EntregaObraCliente> FuncionarioInspecao { get; set; }
        public IEnumerable<EntregaObraCliente> FuncionarioReinspecao { get; set; }

        public ICollection<Atendimento> Atendimentos { get; set; }

        public ICollection<TreinamentoFuncionario> TreinamentosFuncionarios { get; set; }
    }
}

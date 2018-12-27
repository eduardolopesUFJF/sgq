using SGQ.GDOL.Domain.RHRoot.Entity;
using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Entity
{
    public class InspecaoObra : EntityBase
    {
        public int? IdServico { get; set; }
        public DateTime? DataInspecao { get; set; }
        public DateTime? DataEncerramento { get; set; }
        public string Campo1 { get; set; }
        public int? IdFuncionarioAprovado { get; set; }
        public int? IdFuncionarioInspecionado { get; set; }
        public int Status { get; set; }
        public bool Delete { get; set; }
        public DateTime? DataHoraAlteracao { get; set; }

        public Servico ObraChecklistServico { get; set; }
        public ICollection<InspecaoObraItem> InspecaoObraItens { get; set; }
        public Funcionario FuncionarioAprovadoObj { get; set; }
        public Funcionario FuncionarioInspecionadoObj { get; set; }
    }
}

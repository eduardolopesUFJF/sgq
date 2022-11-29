using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Entity
{
    public class InspecaoObraItem : EntityBase
    {
        public int? IdInspecaoObra { get; set; }
        public int? IdItemServico { get; set; }
        public string Ordem { get; set; }
        public string Descricao { get; set; }
        public string Inspecao1 { get; set; }
        public string Inspecao2 { get; set; }
        public bool Delete { get; set; }
        public DateTime? DataHoraInclusao { get; set; }
        public DateTime? DataHoraAlteracao { get; set; }

        public InspecaoObra InspecaoObra { get; set; }
        public virtual ICollection<Ocorrencia> Ocorrencias { get; set; }
    }
}

using System;

namespace SGQ.GDOL.Domain.ObraRoot.Entity
{
    public class InspecaoObra : EntityBase
    {
        public int? IdObraChecklistServico { get; set; }
        public DateTime? DataInspecao { get; set; }
        public DateTime? DataEncerramento { get; set; }
        public string Campo1 { get; set; }
        public string Campo2 { get; set; }
        public string Campo3 { get; set; }
        public string Campo4 { get; set; }
        public int? IdFuncionarioAprovado { get; set; }
        public int? IdFuncionarioInspecionado { get; set; }
        public int Status { get; set; }
        public string DescricaoProblema { get; set; }
        public string CorrecaoProblema { get; set; }
        public byte[] Arquivo1 { get; set; }
        public string Nomearquivo1 { get; set; }
        public byte[] Arquivo2 { get; set; }
        public string Nomearquivo2 { get; set; }
        public bool Delete { get; set; }
        public DateTime? DataHoraInclusao { get; set; }
        public DateTime? DataHoraAlteracao { get; set; }

        public ObraChecklistServico ObraChecklistServico { get; set; }
    }
}

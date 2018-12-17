using System;

namespace SGQ.GDOL.Api.ViewModels
{
    public class InspecaoObraItemVM
    {
        public int Id { get; set; }
        public int? IdInspecaoObra { get; set; }
        public int? IdItemServico { get; set; }
        public string Ordem { get; set; }
        public string Descricao { get; set; }
        public string Inspecao1 { get; set; }
        public string Inspecao2 { get; set; }
        public bool Delete { get; set; }
        public DateTime? DataHoraInclusao { get; set; }
        public DateTime? DataHoraAlteracao { get; set; }
    }
}

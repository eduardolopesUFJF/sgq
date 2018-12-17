using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class InspecaoObraVM
    {
        public int Id { get; set; }
        public string IdGuidInspecao { get; set; }
        public int? IdServico { get; set; }
        public DateTime? DataInspecao { get; set; }
        public DateTime? DataEncerramento { get; set; }
        public string Local { get; set; }
        public int? IdFuncionarioAprovado { get; set; }
        public string FuncionarioAprovado { get; set; }
        public int? IdFuncionarioInspecionado { get; set; }
        public string FuncionarioInspecionado { get; set; }
        public int Status { get; set; }
        public string Situacao { get; set; }
        public bool Delete { get; set; }
        public DateTime? DataHoraAlteracao { get; set; }

        public int QtdNA { get; set; }
        public int QtdA { get; set; }
        public int QtdR { get; set; }
        public int QtdRA { get; set; }
        public int QtdX { get; set; }

        public List<InspecaoObraItemVM> InspecaoObraItens { get; set; }
    }
}

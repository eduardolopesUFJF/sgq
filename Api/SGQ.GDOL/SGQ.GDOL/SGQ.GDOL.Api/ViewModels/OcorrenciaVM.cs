﻿using System;

namespace SGQ.GDOL.Api.ViewModels
{
    public class OcorrenciaVM
    {
        public int Id { get; set; }
        public string IdGuidOcorrencia { get; set; }
        public int IdInspecaoObra { get; set; }
        public string IdGuidInspecao { get; set; }
        public DateTime? DataDescricao { get; set; }
        public DateTime? DataTratativa { get; set; }
        public string Descricao { get; set; }
        public string Tratativa { get; set; }
        public bool? Delete { get; set; }
        public DateTime? DataHoraInclusao { get; set; }
        public DateTime? DataHoraAlteracao { get; set; }
    }
}
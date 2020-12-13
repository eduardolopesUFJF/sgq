using System;

namespace SGQ.GDOL.Domain.ComercialRoot.DTO
{
    public class ParametrosBuscaAcessosDTO
    {
        public string Cliente { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFim { get; set; }
    }
}

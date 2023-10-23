using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.TreinamentoRoot.DTO
{
    public class TreinamentoFuncionarioTerceirizadoAgrupadoDTO
    {
        public string IdGuid { get; set; }
        public int IdentificadorSimbolico { get; set; }
        public DateTime? DataInicio { get; set; }
        public string Instrutor { get; set; }
        public string Local { get; set; }
        public int? DiasPrevisaoAvaliacao { get; set; }
        public IEnumerable<TreinamentoFuncionarioTerceirizadoDTO> Funcionarios { get; set; }
    }
}

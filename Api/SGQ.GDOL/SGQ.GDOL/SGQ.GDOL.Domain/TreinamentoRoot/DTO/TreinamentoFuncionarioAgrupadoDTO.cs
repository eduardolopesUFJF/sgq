using System;
using System.Collections;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.TreinamentoRoot.DTO
{
    public class TreinamentoFuncionarioAgrupadoDTO
    {
        public string IdGuid { get; set; }
        public int IdentificadorSimbolico { get; set; }
        public DateTime? DataInicio { get; set; }
        public string Instrutor { get; set; }
        public string Local { get; set; }
        public int? DiasPrevisaoAvaliacao { get; set; }
        public IEnumerable<TreinamentoFuncionarioDTO> Funcionarios { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class TreinamentoFuncionarioAgrupadoVM
    {
        public string IdGuid { get; set; }
        public DateTime DataInicio { get; set; }
        public string Instrutor { get; set; }
        public string Local { get; set; }
        public int DiasPrevisaoAvaliacao { get; set; }
        public DateTime DataPrevisaAvaliacao { get; set; }
        public bool Delete { get; set; }

        public List<TreinamentoFuncionarioVM> Funcionarios { get; set; }

    }
}

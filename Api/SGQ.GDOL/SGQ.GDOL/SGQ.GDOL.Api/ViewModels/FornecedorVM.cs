using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class FornecedorVM
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public bool? Delete { get; set; }
        public bool? Ativo { get; set; }

        public List<FuncionarioTerceirizadoVM> FuncionariosTerceirizados { get; set; }
    }
}

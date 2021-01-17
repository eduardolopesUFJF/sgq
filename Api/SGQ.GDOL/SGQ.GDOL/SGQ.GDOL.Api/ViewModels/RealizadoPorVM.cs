using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class RealizadoPorVM
    {
        public int Id { get; set; }
        public string IdGuid { get; set; }
        public int IdInspecao { get; set; }
        public int TipoFuncionario { get; set; }
        public int? IdFornecedor { get; set; }
        public string NomeFornecedor { get; set; }
        public int? IdCentroCusto { get; set; }
        public string NomeCentroCusto { get; set; }
        public bool? Delete { get; set; }
        public ICollection<string> NomesFuncionarios { get; set; }
        public ICollection<RealizadoPorFuncionarioVM> Funcionarios { get; set; }
    }
}

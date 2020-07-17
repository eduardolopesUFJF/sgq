using System;

namespace SGQ.GDOL.Api.ViewModels
{
    public class AtendimentoVM
    {
        public int Id { get; set; }
        public string IdGuid { get; set; }
        public int IdAssistenciaTecnica { get; set; }
        public string IdGuidAssistenciaTecnica { get; set; }
        public int Tipo { get; set; }
        public string Descricao { get; set; }
        public DateTime? DataInicio { get; set; }
        public DateTime? DataTermino { get; set; }
        public string Observacoes { get; set; }
        public int? IdFuncionario { get; set; }
        public string DescricaoFuncionario { get; set; }
        public string ResponsavelCliente { get; set; }
        public bool Delete { get; set; }
    }
}

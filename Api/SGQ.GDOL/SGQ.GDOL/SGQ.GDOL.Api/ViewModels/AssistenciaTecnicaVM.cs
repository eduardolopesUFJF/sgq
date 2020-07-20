using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class AssistenciaTecnicaVM
    {
        public int Id { get; set; }
        public string IdGuid { get; set; }
        public int? IdCategoriaAssistencia { get; set; }
        public string DescricaoCategoriaAssistencia { get; set; }
        public int? IdClienteConstrutora { get; set; }
        public bool ClienteCadastrado { get; set; }
        public string NomeCliente { get; set; }
        public int? IdCentroCusto { get; set; }
        public string DescricaoCentroCusto { get; set; }
        public string Local { get; set; }
        public DateTime DataAbertura { get; set; }
        public string Contato { get; set; }
        public string Reclamacao { get; set; }
        public int Procedente { get; set; }
        public string AcaoCorretiva { get; set; }
        public int Resolvido { get; set; }
        public string Observacao { get; set; }
        public decimal? Custo { get; set; }
        public int Prioridade { get; set; }
        public bool Delete { get; set; }

        public string AssinaturaCliente { get; set; }
        public string AssinaturaConstrutora { get; set; }

        public List<AtendimentoVM> Atendimentos { get; set; }
        public List<AssistenciaTecnicaArquivoVM> Arquivos { get; set; }
    }
}

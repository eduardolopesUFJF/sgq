using System;

namespace SGQ.GDOL.Domain.ObraRoot.DTO
{
    public class AlteracaoDTO
    {
        public string Id { get; set; }
        public int ObraId { get; set; }
        public string Tipo { get; set; }
        public string Entidade { get; set; }
        public DateTime Data { get; set; }
        public string Descricao { get; set; }

        public int IdArea { get; set; }
        public string IdGuidArea { get; set; }

        public int IdServico { get; set; }
        public string IdGuidServico { get; set; }

        public int IdInspecao { get; set; }
        public string IdGuidInspecao { get; set; }

        public int IdOcorrencia { get; set; }
        public string IdGuidOcorrencia { get; set; }

        public int IdEntregaObraCliente { get; set; }
        public string IdGuidEntregaObraCliente { get; set; }

        public int IdAssistenciaTecnica { get; set; }
        public string IdGuidAssistenciaTecnica { get; set; }

        public int IdAtendimento { get; set; }
        public string IdGuidAtendimento { get; set; }

        public int IdRealizadoPor { get; set; }
        public string IdGuidRealizadoPor { get; set; }

        public int IdPesquisaSatisfacaoCliente { get; set; }
        public string IdGuidPesquisaSatisfacaoCliente { get; set; }

        public string IdGuidFoto{ get; set; }

        public string IdGuidTreinamento { get; set; }
        public int IdFuncionario { get; set; }
        public string Local { get; set; }
        public string Instrutor { get; set; }
        public DateTime DataInicio { get; set; }

        public string Valor { get; set; }
    }
}

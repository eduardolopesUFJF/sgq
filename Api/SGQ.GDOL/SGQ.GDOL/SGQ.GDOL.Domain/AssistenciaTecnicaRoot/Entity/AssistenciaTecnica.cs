using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity
{
    public class AssistenciaTecnica : EntityBase
    {
        public AssistenciaTecnica()
        {
            Atendimentos = new HashSet<Atendimento>();
            Arquivos = new HashSet<AssistenciaTecnicaArquivo>();
            PesquisasSatisfacaoCliente = new HashSet<PesquisaSatisfacaoCliente>();
        }

        public int? IdCategoriaAssistencia { get; set; }
        public virtual CategoriaAssistencia CategoriaAssistencia { get; set; }
        public string DescricaoCategoriaAssistencia { get; set; }
        public int? IdClienteConstrutora { get; set; }
        public virtual ClienteConstrutora ClienteConstrutora { get; set; }
        public string NomeCliente { get; set; }
        public bool ClienteCadastrado { get; set; }
        public int? IdCentroCusto { get; set; }
        public virtual CentroCusto CentroCusto { get; set; }
        public string Local { get; set; }
        public DateTime DataAbertura { get; set; }
        public DateTime? DataEncerramento { get; set; }
        public DateTime? PrevRealizacaoVistoria { get; set; }
        public DateTime? PrevTerminoAssistencia { get; set; }
        public DateTime? DataReparo { get; set; }
        public string Contato { get; set; }
        public string Reclamacao { get; set; }
        public int Procedente { get; set; }
        public string AcaoCorretiva { get; set; }
        public int Resolvido { get; set; }
        public string Observacao { get; set; }
        public decimal? Custo { get; set; }
        public int Prioridade { get; set; }
        public bool Delete { get; set; }
        public int? Codigo { get; set; }

        public byte[] AssinaturaCliente { get; set; }
        public byte[] AssinaturaConstrutora { get; set; }

        public ICollection<Atendimento> Atendimentos { get; set; }
        public ICollection<AssistenciaTecnicaArquivo> Arquivos { get; set; }
        public ICollection<PesquisaSatisfacaoCliente> PesquisasSatisfacaoCliente { get; set; }
        
    }
}

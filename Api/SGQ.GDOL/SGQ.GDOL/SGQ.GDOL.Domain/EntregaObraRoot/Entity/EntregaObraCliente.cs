using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.RHRoot.Entity;
using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Entity
{
    public class EntregaObraCliente : EntityBase
    {
        public EntregaObraCliente()
        {
            Termos = new HashSet<EntregaObraClienteTermo>();
        }

        public int IdEntregaObra { get; set; }
        public virtual EntregaObra EntregaObra { get; set; }
        public int? IdClienteConstrutora { get; set; }
        public virtual ClienteConstrutora ClienteConstrutora { get; set; }
        public int? IdClienteCentroCusto { get; set; }
        public virtual ClienteCentroCusto ClienteCentroCusto { get; set; }
        public string NomeCliente { get; set; }
        public bool ClienteCadastrado { get; set; }
        public string LocalVistoria { get; set; }
        public DateTime? DataVistoria { get; set; }
        public int TipoVistoria { get; set; }
        public int IdChecklistObra { get; set; }
        public virtual ChecklistObra ChecklistObra { get; set; }
        public int Status { get; set; }
        public int? IdFuncionarioInspecao { get; set; }
        public virtual Funcionario FuncionarioInspecao { get; set; }
        public string NomeFuncionarioInspecao { get; set; }
        public bool FuncionarioInspecaoCadastrado { get; set; }
        public int? IdFuncionarioReinspecao { get; set; }
        public virtual Funcionario FuncionarioReinspecao { get; set; }
        public string NomeFuncionarioReinspecao { get; set; }
        public bool FuncionarioReinspecaoCadastrado { get; set; }
        public DateTime? DataInspecao { get; set; }
        public DateTime? DataReinspecao { get; set; }
        public string ObservacaoCliente { get; set; }
        public string ObservacaoConstrutora { get; set; }
        public bool Delete { get; set; }

        public byte[] AssinaturaCliente { get; set; }
        public byte[] AssinaturaConstrutora { get; set; }

        public ICollection<EntregaObraClienteChecklist> EntregasObrasClientesChecklists { get; set; }
        public ICollection<EntregaObraClienteArquivo> Arquivos { get; set; }
        public ICollection<EntregaObraClienteOcorrencia> Ocorrencias { get; set; }
        public ICollection<EntregaObraClienteTermo> Termos { get; set; }
    }
}

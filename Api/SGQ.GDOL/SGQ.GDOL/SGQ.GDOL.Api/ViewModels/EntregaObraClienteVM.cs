using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class EntregaObraClienteVM
    {
        public int Id { get; set; }
        public string IdGuidEntregaObraCliente { get; set; }
        public int IdEntregaObra { get; set; }
        public int? IdClienteConstrutora { get; set; }
        public string NomeCliente { get; set; }
        public bool ClienteCadastrado { get; set; }
        public string LocalVistoria { get; set; }
        public DateTime? DataVistoria { get; set; }
        public int TipoVistoria { get; set; }
        public string DescricaoTipoVistoria { get; set; }
        public int IdChecklistObra { get; set; }
        public string DescricaoChecklistObra { get; set; }
        public int Status { get; set; }
        public string Situacao { get; set; }
        public int? IdFuncionarioInspecao { get; set; }
        public string NomeFuncionarioInspecao { get; set; }
        public bool FuncionarioInspecaoCadastrado { get; set; }
        public int? IdFuncionarioReinspecao { get; set; }
        public string NomeFuncionarioReinspecao { get; set; }
        public bool FuncionarioReinspecaoCadastrado { get; set; }
        public DateTime? DataInspecao { get; set; }
        public DateTime? DataReinspecao { get; set; }
        public string ObservacaoCliente { get; set; }
        public string ObservacaoConstrutora { get; set; }
        public bool? Delete { get; set; }

        public int QtdNA { get; set; }
        public int QtdA { get; set; }
        public int QtdR { get; set; }
        public int QtdRA { get; set; }
        public int QtdX { get; set; }

        public ICollection<EntregaObraClienteChecklistVM> EntregasObrasClientesChecklists { get; set; }
        public List<OcorrenciaVM> Ocorrencias { get; set; }
    }
}

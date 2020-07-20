using AutoMapper;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.RHRoot.Entity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Api.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<Funcionario, FuncionarioVM>();
            CreateMap<ItemChecklistServico, ItemChecklistServicoVM>();
            CreateMap<ItemChecklistObra, ItemChecklistObraVM>();
            CreateMap<InspecaoObraItem, InspecaoObraItemVM>();
            CreateMap<ClienteConstrutora, ClienteConstrutoraVM>();
            CreateMap<CategoriaAssistencia, CategoriaAssistenciaVM>();
            CreateMap<AssistenciaTecnicaArquivo, AssistenciaTecnicaArquivoVM>();

            CreateMap<CentroCusto, CentroCustoVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.Codigo + " - " + x.Descricao));

            CreateMap<EntregaObraClienteChecklist, EntregaObraClienteChecklistVM>()
                .ForMember(x => x.OrdemItemChecklistEntrega, opt => opt.MapFrom(x => x.ItemChecklistObra.Ordem))
                .ForMember(x => x.DescricaoItemChecklistEntrega, opt => opt.MapFrom(x => x.ItemChecklistObra.Descricao));

            CreateMap<Servico, ServicoVM>()
                .ForMember(x => x.IdArea, opt => opt.MapFrom(x => x.IdObraAreaChecklist))
                .ForMember(x => x.IdChecklist, opt => opt.MapFrom(x => x.IdChecklistServico))
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.ChecklistItem.Codigo + " - " + x.ChecklistItem.Descricao))
                .ForMember(x => x.Tipo, opt => opt.MapFrom(x => x.ChecklistItem.Tipo == "C" ? "Controlado" : "Especializado"))
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Finalizado" : "Em aberto"))
                .ForMember(x => x.InspecoesObra, opt => opt.MapFrom(x => x.InspecoesObra.Where(y => !y.Delete)));

            CreateMap<Obra, ObraVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.CentroCusto.Codigo + " - " + x.CentroCusto.Descricao))
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Finalizado" : "Em aberto"))
                .ForMember(x => x.Areas, opt => opt.MapFrom(x => x.Areas.Where(y => y.Delete.HasValue && !y.Delete.Value).OrderBy(y => y.Descricao)));

            CreateMap<EntregaObra, EntregaObraVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.CentroCusto.Codigo + " - " + x.CentroCusto.Descricao))
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Entregue" : "Em aberto"))
                .ForMember(x => x.EntregasObrasClientes, opt => opt.MapFrom(x => x.EntregasObrasClientes.Where(y => !y.Delete).OrderBy(y => y.DataInspecao)));

            CreateMap<Area, AreaVM>()
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Finalizado" : "Em aberto"))
                .ForMember(x => x.Servicos, opt => opt.MapFrom(x => x.Servicos.Where(y => y.Delete.HasValue && !y.Delete.Value)));

            CreateMap<InspecaoObra, InspecaoObraVM>()
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status == 1 ? "Finalizado" : "Em aberto"))
                .ForMember(x => x.InspecaoObraItens, opt => opt.MapFrom(x => x.InspecaoObraItens.Where(y => !y.Delete).OrderBy(y => y.Ordem)))
                .ForMember(x => x.FuncionarioAprovado, opt => opt.MapFrom(x => x.FuncionarioAprovadoObj.Nome))
                .ForMember(x => x.FuncionarioInspecionado, opt => opt.MapFrom(x => x.FuncionarioInspecionadoObj.Nome))
                .ForMember(x => x.Ocorrencias, opt => opt.MapFrom(x => x.Ocorrencias.Where(y => y.Delete.HasValue && !y.Delete.Value)))
                .ForMember(x => x.QtdNA, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao1.Equals("N"))))
                .ForMember(x => x.QtdA, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao1.Equals("A"))))
                .ForMember(x => x.QtdR, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao1.Equals("R"))))
                .ForMember(x => x.QtdRA, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao2.Equals("A"))))
                .ForMember(x => x.QtdX, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao1.Equals("X"))));

            CreateMap<EntregaObraCliente, EntregaObraClienteVM>()
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status == 1 ? "Entregue" : "Em aberto"))
                .ForMember(x => x.DescricaoTipoVistoria, opt => opt.MapFrom(x => x.TipoVistoria == 1 ? "Construtora" : "Cliente"))
                .ForMember(x => x.DescricaoChecklistObra, opt => opt.MapFrom(x => x.ChecklistObra.Codigo + " - " + x.ChecklistObra.Descricao))
                .ForMember(x => x.ClienteCadastrado, opt => opt.MapFrom(x => x.IdClienteConstrutora.HasValue || string.IsNullOrEmpty(x.NomeCliente)))
                .ForMember(x => x.NomeCliente, opt => opt.MapFrom(x => x.ClienteCadastrado ? x.ClienteConstrutora.Nome : x.NomeCliente))
                .ForMember(x => x.FuncionarioInspecaoCadastrado, opt => opt.MapFrom(x => x.IdFuncionarioInspecao.HasValue || string.IsNullOrEmpty(x.NomeFuncionarioInspecao)))
                .ForMember(x => x.NomeFuncionarioInspecao, opt => opt.MapFrom(x => x.FuncionarioInspecaoCadastrado ? x.FuncionarioInspecao.Nome : x.NomeFuncionarioInspecao))
                .ForMember(x => x.FuncionarioReinspecaoCadastrado, opt => opt.MapFrom(x => x.IdFuncionarioReinspecao.HasValue || string.IsNullOrEmpty(x.NomeFuncionarioReinspecao)))
                .ForMember(x => x.NomeFuncionarioReinspecao, opt => opt.MapFrom(x => x.FuncionarioReinspecaoCadastrado ? x.FuncionarioReinspecao.Nome : x.NomeFuncionarioReinspecao))
                .ForMember(x => x.QtdNA, opt => opt.MapFrom(x => x.EntregasObrasClientesChecklists.Count(y => y.Inspecao1 == "N")))
                .ForMember(x => x.QtdA, opt => opt.MapFrom(x => x.EntregasObrasClientesChecklists.Count(y => y.Inspecao1 == "A")))
                .ForMember(x => x.QtdR, opt => opt.MapFrom(x => x.EntregasObrasClientesChecklists.Count(y => y.Inspecao1 == "R")))
                .ForMember(x => x.QtdRA, opt => opt.MapFrom(x => x.EntregasObrasClientesChecklists.Count(y => y.Inspecao2 == "A")))
                .ForMember(x => x.QtdX, opt => opt.MapFrom(x => x.EntregasObrasClientesChecklists.Count(y => y.Inspecao1 == "X")))
                .ForMember(x => x.Ocorrencias, opt => opt.MapFrom(x => new List<OcorrenciaVM>() /*x.Ocorrencias.Where(y => y.Delete.HasValue && !y.Delete.Value)*/))
                .ForMember(x => x.AssinaturaCliente, opt => opt.MapFrom(x => (x.AssinaturaCliente == null || x.AssinaturaCliente.Length == 0) ? null :
                                                                            "data:image/png;base64," + Convert.ToBase64String(x.AssinaturaCliente)))
                .ForMember(x => x.AssinaturaConstrutora, opt => opt.MapFrom(x => (x.AssinaturaConstrutora == null || x.AssinaturaConstrutora.Length == 0) ? null :
                                                                            "data:image/png;base64," + Convert.ToBase64String(x.AssinaturaConstrutora)));

            CreateMap<ChecklistItem, ChecklistItemVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.Descricao))
                .ForMember(x => x.Tipo, opt => opt.MapFrom(x => x.Tipo == "C" ? "Controlado" : "Especializado"))
                .ForMember(x => x.ItensChecklistServico, opt => opt.MapFrom(x => x.ItensChecklistServico.OrderBy(y => y.Ordem)));

            CreateMap<ChecklistObra, ChecklistObraVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.Codigo + " - " + x.Descricao))
                .ForMember(x => x.ItensChecklistEntrega, opt => opt.MapFrom(x => x.ItensChecklistEntrega.OrderBy(y => y.Ordem)));

            CreateMap<Ocorrencia, OcorrenciaVM>()
                .ForMember(x => x.Fotos, opt => opt.MapFrom(x => new List<FotoVM>() /*x.Ocorrencias.Where(y => y.Delete.HasValue && !y.Delete.Value)*/));

            CreateMap<AssistenciaTecnica, AssistenciaTecnicaVM>()
               .ForMember(x => x.DescricaoCategoriaAssistencia, opt => opt.MapFrom(x => x.CategoriaAssistencia.Nome))
               .ForMember(x => x.ClienteCadastrado, opt => opt.MapFrom(x => x.IdClienteConstrutora.HasValue || string.IsNullOrEmpty(x.NomeCliente)))
               .ForMember(x => x.NomeCliente, opt => opt.MapFrom(x => x.ClienteCadastrado ? x.ClienteConstrutora.Nome : x.NomeCliente))
               .ForMember(x => x.DescricaoCentroCusto, opt => opt.MapFrom(x => x.CentroCusto.Codigo + " - " + x.CentroCusto.Descricao))
               .ForMember(x => x.Atendimentos, opt => opt.MapFrom(x => x.Atendimentos.Where(y => !y.Delete).OrderByDescending(y => y.DataInicio)))
               .ForMember(x => x.AssinaturaCliente, opt => opt.MapFrom(x => (x.AssinaturaCliente == null || x.AssinaturaCliente.Length == 0) ? null :
                                                                            "data:image/png;base64," + Convert.ToBase64String(x.AssinaturaCliente)))
               .ForMember(x => x.AssinaturaConstrutora, opt => opt.MapFrom(x => (x.AssinaturaConstrutora == null || x.AssinaturaConstrutora.Length == 0) ? null :
                                                                            "data:image/png;base64," + Convert.ToBase64String(x.AssinaturaConstrutora)));

            CreateMap<Atendimento, AtendimentoVM>()
                .ForMember(x => x.DescricaoFuncionario, opt => opt.MapFrom(x => x.Funcionario.Nome))
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.Descricao.Length > 100 ? x.Descricao.Substring(0, 100) + "..." : x.Descricao))
                .ForMember(x => x.Observacoes, opt => opt.MapFrom(x => x.Observacoes.Length > 100 ? x.Descricao.Substring(0, 100) + "..." : x.Observacoes));

        }
    }
}

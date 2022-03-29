using AutoMapper;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.RHRoot.Entity;
using System;
using System.Linq;

namespace SGQ.GDOL.Api.AutoMapper
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<CentroCustoVM, CentroCusto>();
            CreateMap<FuncionarioVM, Funcionario>();
            CreateMap<OcorrenciaVM, Ocorrencia>();
            CreateMap<EntregaObraClienteOcorrenciaVM, EntregaObraClienteOcorrencia>();
            CreateMap<EntregaObraVM, EntregaObra>();
            CreateMap<AtendimentoVM, Atendimento>();
            CreateMap<RealizadoPorVM, RealizadoPor>();

            CreateMap<PesquisaSatisfacaoClienteVM, PesquisaSatisfacaoCliente>()
                .ForMember(x => x.TotalPontos, opt => opt.MapFrom(x => x.ItensPesquisaSatisfacaoCliente.Where(y => y.Nota.HasValue).Sum(y => y.Nota.Value)));

            CreateMap<ItemPesquisaSatisfacaoClienteVM, ItemPesquisaSatisfacaoCliente>();

            CreateMap<EntregaObraClienteChecklistVM, EntregaObraClienteChecklist>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => ""));

            CreateMap<EntregaObraClienteVM, EntregaObraCliente>()
                .ForMember(x => x.NomeCliente, opt => opt.MapFrom(x => x.IdClienteConstrutora.HasValue ? "" : x.NomeCliente))
                .ForMember(x => x.LocalVistoria, opt => opt.MapFrom(x => String.IsNullOrEmpty(x.LocalVistoria) ? "" : x.LocalVistoria))
                .ForMember(x => x.Campo1, opt => opt.MapFrom(x => String.IsNullOrEmpty(x.Campo1) ? "" : x.Campo1))
                .ForMember(x => x.Campo2, opt => opt.MapFrom(x => String.IsNullOrEmpty(x.Campo2) ? "" : x.Campo2))
                .ForMember(x => x.Campo3, opt => opt.MapFrom(x => String.IsNullOrEmpty(x.Campo3) ? "" : x.Campo3))
                .ForMember(x => x.Campo4, opt => opt.MapFrom(x => String.IsNullOrEmpty(x.Campo4) ? "" : x.Campo4))
                .ForMember(x => x.NomeFuncionarioInspecao, opt => opt.MapFrom(x => x.IdFuncionarioInspecao.HasValue ? "" : x.NomeFuncionarioInspecao))
                .ForMember(x => x.NomeFuncionarioReinspecao, opt => opt.MapFrom(x => x.IdFuncionarioReinspecao.HasValue ? "" : x.NomeFuncionarioReinspecao))
                .ForMember(x => x.AssinaturaCliente, opt => opt.MapFrom(x => (string.IsNullOrEmpty(x.AssinaturaCliente) || x.AssinaturaCliente.Equals("preenchido")) ? null :
                                                                            Convert.FromBase64String(x.AssinaturaCliente.Split("base64,", StringSplitOptions.None)[1])))
                .ForMember(x => x.AssinaturaConstrutora, opt => opt.MapFrom(x => (string.IsNullOrEmpty(x.AssinaturaConstrutora) || x.AssinaturaConstrutora.Equals("preenchido")) ? null :
                                                                            Convert.FromBase64String(x.AssinaturaConstrutora.Split("base64,", StringSplitOptions.None)[1])));

            CreateMap<AssistenciaTecnicaVM, AssistenciaTecnica>()
                .ForMember(x => x.Local, opt => opt.MapFrom(x => x.IdClienteConstrutora.HasValue ? "" : x.NomeCliente))
                .ForMember(x => x.NomeCliente, opt => opt.MapFrom(x => x.IdClienteConstrutora.HasValue ? "" : x.NomeCliente))
                .ForMember(x => x.AssinaturaCliente, opt => opt.MapFrom(x => (string.IsNullOrEmpty(x.AssinaturaCliente) || x.AssinaturaCliente.Equals("preenchido")) ? null :
                                                                            Convert.FromBase64String(x.AssinaturaCliente.Split("base64,", StringSplitOptions.None)[1])))
                .ForMember(x => x.AssinaturaConstrutora, opt => opt.MapFrom(x => (string.IsNullOrEmpty(x.AssinaturaConstrutora) || x.AssinaturaConstrutora.Equals("preenchido")) ? null :
                                                                            Convert.FromBase64String(x.AssinaturaConstrutora.Split("base64,", StringSplitOptions.None)[1])));

            CreateMap<AssistenciaTecnicaArquivoVM, AssistenciaTecnicaArquivo>()
                .ForMember(x => x.Arquivo, opt => opt.MapFrom(x => Convert.FromBase64String(x.Arquivo)));

            CreateMap<EntregaObraClienteArquivoVM, EntregaObraClienteArquivo>()
                .ForMember(x => x.Arquivo, opt => opt.MapFrom(x => Convert.FromBase64String(x.Arquivo)));

            CreateMap<ChecklistItemVM, ChecklistItem>()
                .ForMember(x => x.Ativo, opt => opt.MapFrom(x => true))
                .ForMember(x => x.Delete, opt => opt.MapFrom(x => false))
                .ForMember(x => x.Campo1, opt => opt.MapFrom(x => x.Campo1 ?? ""))
                .ForMember(x => x.Campo2, opt => opt.MapFrom(x => x.Campo2 ?? ""))
                .ForMember(x => x.Campo3, opt => opt.MapFrom(x => x.Campo3 ?? ""))
                .ForMember(x => x.Campo4, opt => opt.MapFrom(x => x.Campo4 ?? ""));

            CreateMap<ItemChecklistServicoVM, ItemChecklistServico>()
                .ForMember(x => x.Delete, opt => opt.MapFrom(x => x.Delete.HasValue ? x.Delete : false));

            CreateMap<InspecaoObraItemVM, InspecaoObraItem>()
                .ForMember(x => x.Inspecao2, opt => opt.MapFrom(x => x.Inspecao2 == "RA" ? "A" : x.Inspecao2));

            CreateMap<ObraVM, Obra>()
                .ForMember(x => x.Status, opt => opt.MapFrom(x => x.Situacao == "Finalizado" ? 1 : 0));

            CreateMap<ServicoVM, Servico>()
                .ForMember(x => x.IdObraAreaChecklist, opt => opt.MapFrom(x => x.IdArea))
                .ForMember(x => x.IdChecklistServico, opt => opt.MapFrom(x => x.IdChecklist))
                .ForMember(x => x.Status, opt => opt.MapFrom(x => x.Situacao == "Finalizado" ? 1 : 0));

            CreateMap<AreaVM, Area>()
                .ForMember(x => x.Status, opt => opt.MapFrom(x => x.Situacao == "Finalizado" ? 1 : 0));

            CreateMap<InspecaoObraVM, InspecaoObra>()
                .ForMember(x => x.Status, opt => opt.MapFrom(x => x.Situacao == "Finalizado" ? 1 : 0));
            
        }
    }
}

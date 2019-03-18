using AutoMapper;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.RHRoot.Entity;
using System.Linq;

namespace SGQ.GDOL.Api.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<CentroCusto, CentroCustoVM>();
            CreateMap<Funcionario, FuncionarioVM>();
            CreateMap<ItemChecklistServico, ItemChecklistServicoVM>();
            CreateMap<Ocorrencia, OcorrenciaVM>();
            CreateMap<InspecaoObraItem, InspecaoObraItemVM>();
            
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
                .ForMember(x => x.Areas, opt => opt.MapFrom(x => x.Areas.Where(y => y.Delete.HasValue && !y.Delete.Value)));
            
            CreateMap<Area, AreaVM>()
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Finalizado" : "Em aberto"))
                .ForMember(x => x.Servicos, opt => opt.MapFrom(x => x.Servicos.Where(y => y.Delete.HasValue && !y.Delete.Value)));

            CreateMap<InspecaoObra, InspecaoObraVM>()
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status == 1 ? "Finalizado" : "Em aberto"))
                .ForMember(x => x.InspecaoObraItens, opt => opt.MapFrom(x => x.InspecaoObraItens.Where(y => !y.Delete).OrderBy(y => y.Ordem)))
                .ForMember(x => x.FuncionarioAprovado, opt => opt.MapFrom(x => x.FuncionarioAprovadoObj.Nome))
                .ForMember(x => x.FuncionarioInspecionado, opt => opt.MapFrom(x => x.FuncionarioInspecionadoObj.Nome))
                .ForMember(x => x.Ocorrencias, opt => opt.MapFrom(x => x.Ocorrencias.Where(y => !y.Delete.HasValue && !y.Delete.Value)))
                .ForMember(x => x.QtdNA, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao1.Equals("N"))))
                .ForMember(x => x.QtdA, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao1.Equals("A"))))
                .ForMember(x => x.QtdR, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao1.Equals("R"))))
                .ForMember(x => x.QtdRA, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao2.Equals("A"))))
                .ForMember(x => x.QtdX, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao1.Equals("X"))));

            CreateMap<ChecklistItem, ChecklistItemVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.Descricao))
                .ForMember(x => x.Tipo, opt => opt.MapFrom(x => x.Tipo == "C" ? "Controlado" : "Especializado"))
                .ForMember(x => x.ItensChecklistServico, opt => opt.MapFrom(x => x.ItensChecklistServico.OrderBy(y => y.Ordem)));
            
        }
    }
}

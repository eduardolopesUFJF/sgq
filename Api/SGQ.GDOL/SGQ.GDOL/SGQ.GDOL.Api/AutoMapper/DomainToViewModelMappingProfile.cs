using AutoMapper;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using System.Linq;

namespace SGQ.GDOL.Api.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<CentroCusto, CentroCustoVM>();

            CreateMap<Servico, ServicoVM>()
                .ForMember(x => x.IdArea, opt => opt.MapFrom(x => x.IdObraAreaChecklist))
                .ForMember(x => x.IdChecklist, opt => opt.MapFrom(x => x.IdChecklistServico))
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.ChecklistItem.Codigo + " - " + x.ChecklistItem.Descricao))
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Finalizado" : "Em aberto"));

            CreateMap<Obra, ObraVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.CentroCusto.Codigo + " - " + x.CentroCusto.Descricao))
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Finalizado" : "Em aberto"));
            
            CreateMap<Area, AreaVM>()
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Finalizado" : "Em aberto"));

            CreateMap<ChecklistItem, ChecklistItemVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.Codigo + " - " + x.Descricao));
        }
    }
}

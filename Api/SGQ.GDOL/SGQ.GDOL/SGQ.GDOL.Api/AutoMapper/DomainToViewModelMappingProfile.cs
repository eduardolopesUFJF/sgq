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
            CreateMap<Obra, ObraVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.CentroCusto.Codigo + " - " + x.CentroCusto.Descricao))
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Finalizado" : "Em aberto"))
                .ForMember(x => x.Areas, opt => opt.MapFrom(x => x.Areas.Where(y => !y.Delete.Value)));

            CreateMap<CentroCusto, CentroCustoVM>();

            CreateMap<Area, AreaVM>()
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Finalizado" : "Em aberto"));

            CreateMap<ChecklistItem, ChecklistItemVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.Codigo + " - " + x.Descricao));

            CreateMap<Servico, ServicoVM>();
        }
    }
}

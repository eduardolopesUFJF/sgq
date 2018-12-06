using AutoMapper;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Api.AutoMapper
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<ObraVM, Obra>();
            CreateMap<CentroCustoVM, CentroCusto>();
            CreateMap<ChecklistItemVM, ChecklistItem>();
            CreateMap<ServicoVM ,Servico>();
            CreateMap<ServicoVM, Servico>();;

            CreateMap<AreaVM, Area>()
                .ForMember(x => x.Status, opt => opt.MapFrom(x => x.Situacao == "Finalizado" ? 1 : 0));

        }
    }
}

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
            CreateMap<AreaVM, Area>();
            CreateMap<ChecklistServicoVM, ChecklistServico>();
        }
    }
}

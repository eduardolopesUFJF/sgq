using AutoMapper;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.RHRoot.Entity;

namespace SGQ.GDOL.Api.AutoMapper
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<CentroCustoVM, CentroCusto>();
            CreateMap<ChecklistItemVM, ChecklistItem>();
            CreateMap<FuncionarioVM, Funcionario>();

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
                .ForMember(x => x.Status, opt => opt.MapFrom(x => x.Situacao == "Finalizado" ? 1 : 0))
                .ForMember(x => x.Campo1, opt => opt.MapFrom(x => x.Local));
            
        }
    }
}

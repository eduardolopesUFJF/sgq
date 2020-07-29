using Microsoft.Extensions.DependencyInjection;
using SGQ.GDOL.Domain.Core.Notifications;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using SGQ.GDOL.Domain.UsuarioRoot.Service;
using SGQ.GDOL.Domain.UsuarioRoot.Service.Interface;
using SGQ.GDOL.Domain;
using SGQ.GDOL.Infra.Data.SqlServer;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using SGQ.GDOL.Infra.Data.SqlServer.Repository;
using System;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;
using SGQ.GDOL.Domain.ObraRoot.Service;
using SGQ.GDOL.Domain.RHRoot.Repository;
using SGQ.GDOL.Domain.RHRoot.Service;
using SGQ.GDOL.Domain.RHRoot.Service.Interface;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;
using SGQ.GDOL.Domain.ComercialRoot.Service;
using SGQ.GDOL.Domain.EntregaObraRoot.Service;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces;
using SGQ.GDOL.Domain.ComercialRoot.Repository;

namespace SGQ.GDOL.Infra.CrossCutting.IoC
{
    public class Injector
    {
        public static IServiceProvider ServiceProvider { get; set; }

        public static void RegisterServices(IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, UnitOfWork>();

            //Domain Service
            services.AddScoped<IUsuarioService, UsuarioService>();
            services.AddScoped<IObraService, ObraService>();
            services.AddScoped<IChecklistServicoService, ChecklistServicoService>();
            services.AddScoped<IAreaService, AreaService>();
            services.AddScoped<IServicoService, ServicoService>();
            services.AddScoped<IInspecaoService, InspecaoService>();
            services.AddScoped<IFuncionarioService, FuncionarioService>();
            services.AddScoped<IInspecaoObraItemService, InspecaoObraItemService>();
            services.AddScoped<IOcorrenciaService, OcorrenciaService>();
            services.AddScoped<IClienteService, ClienteService>();
            services.AddScoped<IChecklistObraService, ChecklistObraService>();
            services.AddScoped<IClienteConstrutoraService, ClienteConstrutoraService>();
            services.AddScoped<IEntregaObraService, EntregaObraService>();
            services.AddScoped<IEntregaObraClienteService, EntregaObraClienteService>();
            services.AddScoped<IEntregaObraClienteChecklistService, EntregaObraClienteChecklistService>();
            services.AddScoped<IAssistenciaTecnicaService, AssistenciaTecnicaService>();
            services.AddScoped<ICentroCustoService, CentroCustoService>();
            services.AddScoped<ICategoriaAssistenciaService, CategoriaAssistenciaService>();
            services.AddScoped<IAtendimentoService, AtendimentoService>();
            services.AddScoped<IAssistenciaTecnicaArquivoService, AssistenciaTecnicaArquivoService>();
            services.AddScoped<IEntregaObraClienteArquivoService, EntregaObraClienteArquivoService>();
            services.AddScoped<IEntregaObraClienteOcorrenciaService, EntregaObraClienteOcorrenciaService>();
            services.AddScoped<IEntregaObraClienteTermoService, EntregaObraClienteTermoService>();
            services.AddScoped<ITermoService, TermoService>();

            //Infra Data
            services.AddScoped<IUsuarioRepository, UsuarioRepository>();
            services.AddScoped<IObraRepository, ObraRepository>();
            services.AddScoped<IChecklistServicoRepository, ChecklistServicoRepository>();
            services.AddScoped<IAreaRepository, AreaRepository>();
            services.AddScoped<IServicoRepository, ServicoRepository>();
            services.AddScoped<IInspecaoRepository, InspecaoRepository>();
            services.AddScoped<IInspecaoObraItemRepository, InspecaoObraItemRepository>();
            services.AddScoped<IFuncionarioRepository, FuncionarioRepository>();
            services.AddScoped<IUsuarioCentroCustoRepository, UsuarioCentroCustoRepository>();
            services.AddScoped<IOcorrenciaRepository, OcorrenciaRepository>();
            services.AddScoped<IChecklistObraRepository, ChecklistObraRepository>();
            services.AddScoped<IClienteConstrutoraRepository, ClienteConstrutoraRepository>();
            services.AddScoped<IEntregaObraRepository, EntregaObraRepository>();
            services.AddScoped<IEntregaObraClienteRepository, EntregaObraClienteRepository>();
            services.AddScoped<IEntregaObraClienteChecklistRepository, EntregaObraClienteChecklistRepository>();
            services.AddScoped<IAssistenciaTecnicaRepository, AssistenciaTecnicaRepository>();
            services.AddScoped<ICentroCustoRepository, CentroCustoRepository>();
            services.AddScoped<ICategoriaAssistenciaRepository, CategoriaAssistenciaRepository>();
            services.AddScoped<IAtendimentoRepository, AtendimentoRepository>();
            services.AddScoped<IAssistenciaTecnicaArquivoRepository, AssistenciaTecnicaArquivoRepository>();
            services.AddScoped<IEntregaObraClienteArquivoRepository, EntregaObraClienteArquivoRepository>();
            services.AddScoped<IEntregaObraClienteOcorrenciaRepository, EntregaObraClienteOcorrenciaRepository>();
            services.AddScoped<IEntregaObraClienteTermoRepository, EntregaObraClienteTermoRepository>();
            services.AddScoped<ITermoRepository, TermoRepository>();

            services.AddScoped<ServiceContext>();
            services.AddScoped<NotificationHandler>();

            ServiceProvider = services.BuildServiceProvider();
        }
    }
}

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

            services.AddScoped<ServiceContext>();
            services.AddScoped<NotificationHandler>();

            ServiceProvider = services.BuildServiceProvider();
        }
    }
}

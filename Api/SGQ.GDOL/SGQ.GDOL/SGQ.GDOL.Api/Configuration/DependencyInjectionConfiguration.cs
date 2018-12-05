using Microsoft.Extensions.DependencyInjection;
using SGQ.GDOL.Infra.CrossCutting.IoC;

namespace SGQ.GDOL.Api.Configuration
{
    public static class DependencyInjectionConfiguration
    {
        public static void AddDIConfiguration(this IServiceCollection services)
        {
           Injector.RegisterServices(services);
        }
    }
}

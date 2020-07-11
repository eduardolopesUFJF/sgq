using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using SGQ.GDOL.Domain;

namespace SGQ.GDOL.Api.Middleware
{
    public class TratarSchemaMiddleware
    {
        private readonly RequestDelegate _next;

        public TratarSchemaMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            CredenciaisBanco.Schema = "BPOSSAS_" + context.Request.Headers.FirstOrDefault(x => x.Key == "BancoSchema").Value.ToString().ToUpper();

            if (CredenciaisBanco.Schema.Equals("BPOSSAS_CRISTO REI"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_CR";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_MELO BORGES"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_MELOBORGES";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_GDOL"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_GDOLSISTEMAS";
            }

            CredenciaisBanco.Usuario = "BPOSSAS_aplicativo";
            CredenciaisBanco.Senha = "2019Gd@L@pp";
            await _next(context);
        }
    }
}

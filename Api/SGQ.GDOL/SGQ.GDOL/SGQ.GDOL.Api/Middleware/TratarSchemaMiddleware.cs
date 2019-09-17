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
            CredenciaisBanco.Schema = "GDOLSGQ_" + context.Request.Headers.FirstOrDefault(x => x.Key == "BancoSchema").Value.ToString().ToUpper();

            if (CredenciaisBanco.Schema.ToUpper().Equals("GDOLSGQ_ARCO"))
            {
                CredenciaisBanco.Schema = "GDOLSGQ_ARCOS";
            }
            if (CredenciaisBanco.Schema.Equals("GDOLSGQ_CRISTO REI"))
            {
                CredenciaisBanco.Schema = "GDOLSGQ_CR";
            }
            if (CredenciaisBanco.Schema.Equals("GDOLSGQ_GDOL"))
            {
                CredenciaisBanco.Schema = "GDOLSGQ";
            }

            CredenciaisBanco.Usuario = "gdol_aplicativo";
            CredenciaisBanco.Senha = "2019Gd@L@pp";
            await _next(context);
        }
    }
}

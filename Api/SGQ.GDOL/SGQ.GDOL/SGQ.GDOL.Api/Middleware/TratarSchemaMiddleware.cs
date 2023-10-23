using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Serilog;
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
            var schema_header = context.Request.Headers.FirstOrDefault(x => x.Key == "BancoSchema" || x.Key == "bancoschema").Value.ToString().ToUpper();

            if (string.IsNullOrEmpty(schema_header))
            {
                CredenciaisBanco.Schema = "BPOSSAS_GDOL";
                CredenciaisBanco.Cliente = "GDOL";
            }
            else
            {
                CredenciaisBanco.Schema = "BPOSSAS_" + schema_header;
                CredenciaisBanco.Cliente = schema_header;
            }

            if (context.Request.Path.Equals("/api/cliente/") || context.Request.Path.Equals("/api/cliente/true"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_GDOL";
            }

            if (CredenciaisBanco.Schema.Equals("BPOSSAS_CONSTROI GOMES"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_CONSTROIGOMES";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_REFORME FACIL"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_REFORMEFACIL";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_MELHOR LAR"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_MELHORLAR";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_CRISTO REI"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_CR";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_MELO BORGES"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_MELOBORGES";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_RIO MANSO"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_RIOMANSO";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_MUDE CONSTRUTORA"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_MUDECONSTRUTORA";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_GG CONSTRUTORA"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_GGCONSTRUTORA";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_VASCONCELOS COPARI"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_VASCONCELOSCOPARI";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_METRO A MAIS"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_METROAMAIS";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_SMART CONSTRUTORA"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_SMARTCONSTRUTORA";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_SMART HOUSE"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_SMART";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_GDOL") || CredenciaisBanco.Schema.Equals("BPOSSAS_BPOSSAS_CONTROLE_CLIENTES"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_GDOLSISTEMAS";
            }

            CredenciaisBanco.Usuario = "BPOSSAS_aplicativo";
            CredenciaisBanco.Senha = "2019Gd@L@pp";
            await _next(context);
        }
    }
}

using System;
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
            var schema_header = context.Request.Headers.FirstOrDefault(x => x.Key.Equals("bancoschema", StringComparison.InvariantCultureIgnoreCase)).Value.ToString().ToUpper();

            if (string.IsNullOrEmpty(schema_header))
            {
                CredenciaisBanco.Schema = "BPOSSAS_GDOL";
                CredenciaisBanco.Cliente = "GDOL";

                if (!context.Request.Path.Equals("/api/cliente/") && !context.Request.Path.Equals("/api/cliente/true"))
                {
                    var path = context.Request.Path;
                    Log.Fatal("Header com schema enviado vazio no path: \n" + path + "\n\n");
                }
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
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_CRISTO REI"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_CR";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_SMART HOUSE"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_SMART";
            }
            if (CredenciaisBanco.Schema.Equals("BPOSSAS_GDOL") || CredenciaisBanco.Schema.Equals("BPOSSAS_BPOSSAS_CONTROLE_CLIENTES"))
            {
                CredenciaisBanco.Schema = "BPOSSAS_GDOLSISTEMAS";
            }
            //Casos especiais como Cristo Rei, Smart House e GDOL devem ser colocados manualmente aqui
            if (CredenciaisBanco.Schema.Contains(" "))
            {
                CredenciaisBanco.Schema = CredenciaisBanco.Schema.Replace(" ", "");
            }

            CredenciaisBanco.Usuario = "BPOSSAS_aplicativo";
            CredenciaisBanco.Senha = "2019Gd@L@pp";
            await _next(context);
        }
    }
}

using AutoMapper;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.UsuarioRoot.DTO;
using SGQ.GDOL.Domain.UsuarioRoot.Service.Interface;
using System;
using System.IO;
using System.Linq;
using System.Text;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Usuario")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioService _usuarioService;

        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpPost("logar")]
        public IActionResult Post([FromBody] UsuarioLoginVM usuarioLoginVM)
        {
            var body = "";
            var req = Request;
            req.EnableRewind();
            req.Body.Position = 0;
            using (StreamReader reader
                      = new StreamReader(req.Body, Encoding.UTF8, true, 1024, true))
            {
                body = reader.ReadToEnd();
            }
            req.Body.Position = 0;

            var schema = Request.Headers.FirstOrDefault(x => x.Key == "BancoSchema").Value.ToString().ToUpper();

            Log.Fatal("Schema enviado: " + schema + "\n" + body);

            var usuarioLoginDTO = Mapper.Map<UsuarioLoginDTO>(usuarioLoginVM);
            var result = _usuarioService.Logar(usuarioLoginDTO);
            return Ok(result);
        }
    }
}

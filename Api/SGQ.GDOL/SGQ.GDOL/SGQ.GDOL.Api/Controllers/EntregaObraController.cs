using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;
using System.Linq;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/EntregaObra")]
    public class EntregaObraController : Controller
    {
        private readonly IEntregaObraService _entregaObraService;

        public EntregaObraController(
            IEntregaObraService entregaObraService)
        {
            _entregaObraService = entregaObraService;
        }

        [HttpGet("ids/{usuario}")]
        public IActionResult GetIds(string usuario)
        {
            var ids = _entregaObraService.ObterTodasAtivasSemInclude(usuario).Select(x => x.Id).ToArray();
            return Ok(ids);
        }

        [HttpGet("{idObra}")]
        public IActionResult GetById(int idObra)
        {
            var entregaObraBD = _entregaObraService.ObterComInclude(new EntregaObra { Id = idObra });
            var obraVM = Mapper.Map<EntregaObraVM>(entregaObraBD);
            return Ok(obraVM);
        }
    }
}

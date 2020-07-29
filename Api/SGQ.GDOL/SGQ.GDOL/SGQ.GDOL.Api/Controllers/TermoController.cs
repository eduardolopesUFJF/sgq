using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Termo")]
    public class TermoController : Controller
    {
        private readonly ITermoService _termoService;

        public TermoController(ITermoService termoService)
        {
            _termoService = termoService;
        }

        [HttpGet("ativos")]
        public IActionResult Get()
        {
            var resultBD = _termoService.ObterTodosAtivos();
            var resultVM = Mapper.Map<List<TermoVM>>(resultBD);
            return Ok(resultVM);
        }
    }
}

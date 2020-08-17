using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/AssistenciaTecnica")]
    public class AssistenciaTecnicaController : Controller
    {
        private readonly IAssistenciaTecnicaService _assistenciaTecnicaService;

        public AssistenciaTecnicaController(
            IAssistenciaTecnicaService assistenciaTecnicaService)
        {
            _assistenciaTecnicaService = assistenciaTecnicaService;
        }

        [HttpGet("itens-ativos")]
        public IActionResult Get()
        {
            var resultBD = _assistenciaTecnicaService.ObterTodosAtivos().OrderByDescending(x => x.DataAbertura).ToList();
            var resultVM = Mapper.Map<List<AssistenciaTecnicaVM>>(resultBD);
            return Ok(resultVM);
        }
    }
}

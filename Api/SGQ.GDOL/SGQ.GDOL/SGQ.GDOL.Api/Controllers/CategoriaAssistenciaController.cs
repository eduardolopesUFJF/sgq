using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/CategoriaAssistencia")]
    public class CategoriaAssistenciaController : Controller
    {
        private readonly ICategoriaAssistenciaService _categoriaAssistenciaService;

        public CategoriaAssistenciaController(
            ICategoriaAssistenciaService categoriaAssistenciaService)
        {
            _categoriaAssistenciaService = categoriaAssistenciaService;
        }

        [HttpGet("itens-ativos")]
        public IActionResult Get()
        {
            var resultBD = _categoriaAssistenciaService.ObterTodosAtivos();
            var resultVM = Mapper.Map<List<CategoriaAssistenciaVM>>(resultBD);
            return Ok(resultVM);
        }
    }
}

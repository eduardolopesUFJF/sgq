using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ChecklistObraController : Controller
    {
        private readonly IChecklistObraService _checklistObraService;

        public ChecklistObraController(IChecklistObraService checklistObraService)
        {
            _checklistObraService = checklistObraService;
        }

        [HttpGet("itens-ativos")]
        public IActionResult Get()
        {
            var resultBD = _checklistObraService.ObterTodosAtivos();
            var resultVM = Mapper.Map<List<ChecklistObraVM>>(resultBD).OrderBy(x => x.Descricao);
            return Ok(resultVM);
        }
    }
}

using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;
using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Checklist")]
    public class ChecklistController : Controller
    {
        private readonly IChecklistServicoService _checklistServicoService;

        public ChecklistController(IChecklistServicoService checklistServicoService)
        {
            _checklistServicoService = checklistServicoService;
        }

        [HttpGet("itens-ativos")]
        public IActionResult Get()
        {
            try
            {
                var resultBD = _checklistServicoService.ObterTodosAtivos();
                var resultVM = Mapper.Map<List<ChecklistServicoVM>>(resultBD);
                return Ok(resultVM);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}

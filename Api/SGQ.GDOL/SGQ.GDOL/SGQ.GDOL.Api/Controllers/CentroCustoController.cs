using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/CentroCusto")]
    public class CentroCustoController : Controller
    {
        private readonly ICentroCustoService _centroCustoService;

        public CentroCustoController(
            ICentroCustoService centroCustoService)
        {
            _centroCustoService = centroCustoService;
        }

        [HttpGet("itens-ativos")]
        public IActionResult Get()
        {
            var resultBD = _centroCustoService.ObterTodosAtivos();
            var resultVM = Mapper.Map<List<CentroCustoVM>>(resultBD);
            return Ok(resultVM.OrderBy(x => x.Descricao));
        }
    }
}

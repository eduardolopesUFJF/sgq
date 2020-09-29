using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.TreinamentoRoot.Service.Interface;
using SGQ.GDOL.Domain.TreinamentoRoot.Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Treinamento")]
    public class TreinamentoController : Controller
    {
        private readonly ITreinamentoService _treinamentoService;
        private readonly ITreinamentoFuncionarioService _treinamentoFuncionarioService;

        public TreinamentoController(
            ITreinamentoService treinamentoService,
            ITreinamentoFuncionarioService treinamentoFuncionarioService)
        {
            _treinamentoService = treinamentoService;
            _treinamentoFuncionarioService = treinamentoFuncionarioService;
        }

        [HttpGet("itens-ativos")]
        public IActionResult Get()
        {
            var resultBD = _treinamentoService.ObterTodosAtivos();
            var resultVM = Mapper.Map<List<TreinamentoVM>>(resultBD);
            return Ok(resultVM.OrderBy(x => x.Nome));
        }

        [HttpGet("funcionarios")]
        public IActionResult GetFuncionarios()
        {
            var resultDTO = _treinamentoFuncionarioService.ObterTodosAtivos();
            return Ok(resultDTO);
        }
    }
}

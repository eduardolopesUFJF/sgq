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
        private readonly ITreinamentoFuncionarioTerceirizadoService _treinamentoFuncionarioTerceirizadoService;

        public TreinamentoController(
            ITreinamentoService treinamentoService,
            ITreinamentoFuncionarioService treinamentoFuncionarioService,
            ITreinamentoFuncionarioTerceirizadoService treinamentoFuncionarioTerceirizadoService)
        {
            _treinamentoService = treinamentoService;
            _treinamentoFuncionarioService = treinamentoFuncionarioService;
            _treinamentoFuncionarioTerceirizadoService = treinamentoFuncionarioTerceirizadoService;
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

        [HttpGet("funcionarios-terceirizados")]
        public IActionResult GetFuncionariosTerceirizados()
        {
            var resultDTO = _treinamentoFuncionarioTerceirizadoService.ObterTodosAtivos();
            return Ok(resultDTO);
        }
    }
}

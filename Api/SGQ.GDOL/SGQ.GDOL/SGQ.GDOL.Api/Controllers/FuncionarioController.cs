using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.RHRoot.Service.Interface;
using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Funcionario")]
    public class FuncionarioController : Controller
    {
        private readonly IFuncionarioService _funcionarioService;

        public FuncionarioController(IFuncionarioService funcionarioService)
        {
            _funcionarioService = funcionarioService;
        }

        [HttpGet("ativos")]
        public IActionResult Get()
        {
            var resultBD = _funcionarioService.ObterTodosAtivos();
            var resultVM = Mapper.Map<List<FuncionarioVM>>(resultBD);
            return Ok(resultVM);
        }
    }
}

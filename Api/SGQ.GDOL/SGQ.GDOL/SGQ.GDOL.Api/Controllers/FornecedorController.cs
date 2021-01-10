using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.RHRoot.Service.Interface;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Fornecedor")]
    public class FornecedorController : Controller
    {
        private readonly IFornecedorService _fornecedorService;

        public FornecedorController(IFornecedorService fornecedorService)
        {
            _fornecedorService = fornecedorService;
        }

        [HttpGet]
        public IActionResult ObterFornecedores()
        {
            var resultBD = _fornecedorService.ObterTodosAtivos();
            var resultVM = Mapper.Map<List<FornecedorVM>>(resultBD);
            return Ok(resultVM);
        }
    }
}

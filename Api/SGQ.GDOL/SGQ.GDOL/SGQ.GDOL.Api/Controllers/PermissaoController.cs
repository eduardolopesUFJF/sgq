using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Permissao")]
    public class PermissaoController : Controller
    {
        private readonly IPermissaoService _permissaoService;

        public PermissaoController(
            IPermissaoService permissaoService)
        {
            _permissaoService = permissaoService;
        }

        [HttpGet("{cliente}")]
        public IActionResult Get([FromRoute] string cliente)
        {
            var permissoes = _permissaoService.ObterPermissoes(cliente);
            return Ok(permissoes);
        }
    }
}

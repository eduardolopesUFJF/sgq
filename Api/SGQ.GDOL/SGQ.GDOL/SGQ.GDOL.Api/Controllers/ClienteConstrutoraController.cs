using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/ClienteConstrutora")]
    public class ClienteConstrutoraController : Controller
    {
        private readonly IClienteConstrutoraService _clienteConstrutoraService;

        public ClienteConstrutoraController(
            IClienteConstrutoraService clienteConstrutoraService)
        {
            _clienteConstrutoraService = clienteConstrutoraService;
        }

        [HttpGet("ativos")]
        public IActionResult Get()
        {
            var clientes = _clienteConstrutoraService.BuscarTodosAtivos();
            return Ok(clientes);
        }
    }
}

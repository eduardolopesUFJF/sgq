using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Cliente")]
    public class ClienteController : Controller
    {
        private readonly IClienteService _clienteService;

        public ClienteController(
            IClienteService clienteService)
        {
            _clienteService = clienteService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var clientes = _clienteService.BuscarTodos();
            return Ok(clientes);
        }
    }
}

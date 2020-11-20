using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;
using System;

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

        [HttpGet("{appServicos}")]
        public IActionResult GetServicos([FromQuery] bool appServicos)
        {
            var clientes = _clienteService.BuscarTodos(appServicos);
            return Ok(clientes);
        }

        [HttpGet]
        public IActionResult GetChecklist()
        {
            var clientes = _clienteService.BuscarTodos(false);
            return Ok(clientes);
        }
    }
}

using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;
using System.Collections.Generic;

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
            var clientesBD = _clienteConstrutoraService.BuscarTodosAtivos();
            var clientesVM = Mapper.Map<IEnumerable<ClienteConstrutoraVM>>(clientesBD);
            return Ok(clientesVM);
        }
    }
}

using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Domain.ComercialRoot.DTO;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

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
        public IActionResult GetServicos([FromRoute] bool appServicos)
        {
            var clientesBD = _clienteService.BuscarTodos(appServicos);
            var clientesDTO = Mapper.Map<List<ClienteDTO>>(clientesBD).OrderBy(x =>x.Title != "GDOL").ThenBy(x => x.Title);
            return Ok(clientesDTO);
        }

        [HttpGet]
        public IActionResult GetChecklist()
        {
            var clientesBD = _clienteService.BuscarTodos(false);
            var clientesDTO = Mapper.Map<List<ClienteDTO>>(clientesBD).OrderBy(x => x.Title != "GDOL").ThenBy(x => x.Title);
            return Ok(clientesDTO);
        }
    }
}

using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;
using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Servico")]
    public class ServicoController : Controller
    {
        private readonly IServicoService _servicoService;

        public ServicoController(IServicoService servicoService)
        {
            _servicoService = servicoService;
        }

        [HttpGet("{areaId}")]
        public IActionResult Get(int areaId)
        {
            try
            {
                var servicosBD = _servicoService.ObterServicosPorArea(areaId);
                var servicosVM = Mapper.Map<List<ServicoVM>>(servicosBD);
                return Ok(servicosVM);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}

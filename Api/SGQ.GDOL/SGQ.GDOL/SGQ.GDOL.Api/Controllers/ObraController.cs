using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;
using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Obra")]
    public class ObraController : Controller
    {
        private readonly IObraService _obraService;

        public ObraController(IObraService obraService)
        {
            _obraService = obraService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var resultBD = _obraService.ObterTodasAtivasCompletas();
                var resultVM = Mapper.Map<List<ObraVM>>(resultBD);
                return Ok(resultVM);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}

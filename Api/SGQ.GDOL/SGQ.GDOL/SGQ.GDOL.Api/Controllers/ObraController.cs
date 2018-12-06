using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Threading;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Obra")]
    public class ObraController : Controller
    {
        private readonly IObraService _obraService;

        public ObraController(
            IObraService obraService)
        {
            _obraService = obraService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var resultBD = _obraService.ObterTodasAtivasSemInclude();

                List<Task<Obra>> consultas = new List<Task<Obra>>();
                foreach (var obra in resultBD)
                {
                    Task<Obra> task = Task.Run(() => _obraService.ObterObraComInclude(obra));
                    consultas.Add(task);
                }

                var result = Task.WhenAll(consultas.ToArray()).Result;
                
                var resultVM = Mapper.Map<List<ObraVM>>(result);
                return Ok(resultVM);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}

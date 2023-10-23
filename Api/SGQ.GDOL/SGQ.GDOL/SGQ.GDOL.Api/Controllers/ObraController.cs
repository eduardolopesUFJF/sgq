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
        
        [HttpGet("ids/{usuario}")]
        public IActionResult GetIds(string usuario)
        {
            var ids = _obraService.ObterTodasAtivasSemInclude(usuario).Select(x => x.Id).ToArray();
            return Ok(ids);
        }

        [HttpGet("{idObra}")]
        public IActionResult GetById(int idObra)
        {
            var obraBD = _obraService.ObterObraComInclude(new Obra{ Id = idObra});
            var obraVM = Mapper.Map<ObraVM>(obraBD);
            var teste = obraVM.Areas.Where(x => x.Id == 12712);
            return Ok(obraVM);
        }
    }
}

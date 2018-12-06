using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SGQ.GDOL.Domain.ObraRoot.DTO;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;
using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Alteracao")]
    public class AlteracaoController : Controller
    {
        private readonly IAreaService _areaService;

        public AlteracaoController(IAreaService areaService)
        {
            _areaService = areaService;
        }

        [HttpPost]
        public IActionResult Post([FromBody] List<AlteracaoDTO> alteracoes)
        {
            try
            {
                PersistirAlteracoes(alteracoes);
                return Ok(true);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        private void PersistirAlteracoes(List<AlteracaoDTO> alteracoes)
        {
            foreach (var alteracao in alteracoes)
            {
                switch (alteracao.Entidade.ToLower())
                {
                    case "area":
                        var area = JsonConvert.DeserializeObject<Area>(alteracao.Valor);
                        if (alteracao.Tipo.ToLower().Equals("insert"))
                        {
                            _areaService.Adicionar(area);
                        }
                        else
                        {
                            _areaService.Atualizar(area);
                        }
                        break;
                }
            }
        }
    }
}

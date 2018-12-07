using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SGQ.GDOL.Api.ViewModels;
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
        private readonly IServicoService _servicoService;

        public AlteracaoController(
            IAreaService areaService,
            IServicoService servicoService)
        {
            _areaService = areaService;
            _servicoService = servicoService;
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
                        var areaVM = JsonConvert.DeserializeObject<AreaVM>(alteracao.Valor);
                        var areaBD = Mapper.Map<Area>(areaVM);
                        if (alteracao.Tipo.ToLower().Equals("insert"))
                        {
                            _areaService.Adicionar(areaBD);
                        }
                        else
                        {
                            areaBD.Obra = null;
                            areaBD.Servicos = null;
                            _areaService.Atualizar(areaBD);
                        }
                        break;
                    case "servico":
                        var servicoVM = JsonConvert.DeserializeObject<ServicoVM>(alteracao.Valor);
                        var servicoBD = Mapper.Map<Servico>(servicoVM);
                        servicoBD.Area = null;
                        servicoBD.ChecklistItem = null;
                        servicoBD.InspecaoObra = null;
                        servicoBD.Obra = null;
                        _servicoService.Atualizar(servicoBD);
                        break;
                }
            }
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using SGQ.GDOL.Domain.ComercialRoot.DTO;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;
using System;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ConfiguracaoClienteController : Controller
    {
        private readonly IConfiguracaoClienteService _configuracaoClienteService;
        private readonly IAcessoClienteService _acessoClienteService;

        public ConfiguracaoClienteController(
            IConfiguracaoClienteService configuracaoClienteService,
            IAcessoClienteService acessoClienteService)
        {
            _configuracaoClienteService = configuracaoClienteService;
            _acessoClienteService = acessoClienteService;
        }

        [HttpPost]
        public IActionResult Criar([FromBody] ConfiguracaoCliente configuracaoCliente)
        {
            var sucesso = _configuracaoClienteService.CriarConfiguracoes(configuracaoCliente);
            return Ok(sucesso);
        }

        [HttpPut]
        public IActionResult Atualizar([FromBody] ConfiguracaoCliente configuracaoCliente)
        {
            var sucesso = _configuracaoClienteService.AtualizarConfiguracoes(configuracaoCliente);
            return Ok(sucesso);
        }

        [HttpGet("{cliente}")]
        public IActionResult Obter([FromRoute] string cliente)
        {
            var configuracoes = _configuracaoClienteService.BuscarConfiguracoes(cliente);
            return Ok(configuracoes);
        }

        [HttpDelete("{idCliente}")]
        public IActionResult Deletar([FromRoute] int idCliente)
        {
            _configuracaoClienteService.Deletar(idCliente);
            return Ok();
        }

        [HttpPost("acessos")]
        public IActionResult ObterAcessos([FromBody] ParametrosBuscaAcessosDTO parametrosBuscaAcessos)
        {
            var acessos = _acessoClienteService.ObterAcessos(parametrosBuscaAcessos.Cliente, parametrosBuscaAcessos.DataInicio, parametrosBuscaAcessos.DataFim);
            return Ok(acessos);
        }

    }
}

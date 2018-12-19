using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.ObraRoot.DTO;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Alteracao")]
    public class AlteracaoController : Controller
    {
        private readonly IAreaService _areaService;
        private readonly IServicoService _servicoService;
        private readonly IInspecaoService _inspecaoService;

        public AlteracaoController(
            IAreaService areaService,
            IServicoService servicoService,
            IInspecaoService inspecaoService)
        {
            _areaService = areaService;
            _servicoService = servicoService;
            _inspecaoService = inspecaoService;
        }

        [HttpPost]
        public IActionResult Post([FromBody] List<AlteracaoDTO> alteracoes)
        {
            try
            {
                var status = PrepararAlteracoes(alteracoes);
                return Ok(status);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        private string PrepararAlteracoes(List<AlteracaoDTO> alteracoes)
        {
            string status = "";
            List<AreaVM> areas = new List<AreaVM>();
            List<ServicoVM> servicos = new List<ServicoVM>();
            List<InspecaoObraVM> inspecoes = new List<InspecaoObraVM>();

            PrepararAreas(alteracoes, areas);
            PrepararServicos(alteracoes, areas, servicos);
            PrepararInspecoes(alteracoes, areas, servicos, inspecoes);

            status = PersistirServicos(servicos, status);
            status = PersistirAreas(areas, status);
            status = PersistirInspecoes(inspecoes, status);

            return status;
        }

        private static void PrepararServicos(List<AlteracaoDTO> alteracoes, List<AreaVM> areas, List<ServicoVM> servicos)
        {
            var servicosAlterados = alteracoes.Where(x => x.Entidade.ToUpper() == "SERVICO");

            foreach (var alteracao in servicosAlterados)
            {
                var servicoVM = JsonConvert.DeserializeObject<ServicoVM>(alteracao.Valor);
                var areaCadastrada = areas.FirstOrDefault(x => x.IdGuidArea == alteracao.IdGuidArea && alteracao.IdGuidArea != null);
                if (areaCadastrada != null)
                {
                    ServicoVM servicoCadastrado;
                    if(alteracao.IdServico != 0)
                    {
                        servicoCadastrado = areaCadastrada.Servicos.FirstOrDefault(x => x.Id == servicoVM.Id);
                    }
                    else
                    {
                        servicoCadastrado = areaCadastrada.Servicos.FirstOrDefault(x => x.IdGuidServico == alteracao.IdGuidServico);
                    }
                    if (servicoCadastrado != null)
                    {
                        servicoCadastrado.Delete = servicoVM.Delete;
                    }
                }
                else
                {
                    servicos.Add(servicoVM);
                }
            }
        }

        private static void PrepararAreas(List<AlteracaoDTO> alteracoes, List<AreaVM> areas)
        {
            var areasCadastradas = alteracoes.Where(x => x.Entidade.ToUpper() == "AREA" && x.Tipo.ToUpper() == "INSERT");
            var areasAlteradas = alteracoes.Where(x => x.Entidade.ToUpper() == "AREA" && x.Tipo.ToUpper() == "UPDATE" && x.IdArea != 0);
            var areasNovasAlteradas = alteracoes.Where(x => x.Entidade.ToUpper() == "AREA" && x.Tipo.ToUpper() == "UPDATE" && x.IdArea == 0);

            foreach (var alteracao in areasCadastradas)
            {
                var areaVM = JsonConvert.DeserializeObject<AreaVM>(alteracao.Valor);
                areaVM.IdGuidArea = alteracao.IdGuidArea;
                areas.Add(areaVM);
            }

            foreach (var alteracao in areasNovasAlteradas)
            {
                var areaVM = JsonConvert.DeserializeObject<AreaVM>(alteracao.Valor);
                var areaCadastrada = areas.FirstOrDefault(x => x.IdGuidArea == alteracao.IdGuidArea);
                if (areaCadastrada != null)
                {
                    areaCadastrada.Delete = areaVM.Delete;
                }
            }

            foreach (var alteracao in areasAlteradas)
            {
                var areaVM = JsonConvert.DeserializeObject<AreaVM>(alteracao.Valor);
                areas.Add(areaVM);
            }
        }

        private static void PrepararInspecoes(List<AlteracaoDTO> alteracoes, List<AreaVM> areas, List<ServicoVM> servicos, List<InspecaoObraVM> inspecoes)
        {
            var inspecoesAlteradas = alteracoes.Where(x => x.Entidade.ToUpper() == "INSPECAO");

            foreach (var alteracao in inspecoesAlteradas)
            {
                var inspecaoVM = JsonConvert.DeserializeObject<InspecaoObraVM>(alteracao.Valor);
                var areaCadastrada = areas.FirstOrDefault(x => x.IdGuidArea == alteracao.IdGuidArea && alteracao.IdGuidArea != null);

                if (areaCadastrada != null)
                {
                    ServicoVM servicoCadastrado;
                    if (alteracao.IdServico != 0)
                    {
                        servicoCadastrado = areaCadastrada.Servicos.FirstOrDefault(x => x.Id == alteracao.IdServico);
                    }
                    else
                    {
                        servicoCadastrado = areaCadastrada.Servicos.FirstOrDefault(x => x.IdGuidServico == alteracao.IdGuidServico);
                    }
                    if (servicoCadastrado != null)
                    {
                        if(alteracao.Tipo.ToUpper() == "INSERT")
                        {
                            servicoCadastrado.InspecoesObra.Add(inspecaoVM);
                        }
                        else
                        {
                            InspecaoObraVM inspecaoCadastrada;
                            if (alteracao.IdInspecao != 0)
                            {
                                inspecaoCadastrada = servicoCadastrado.InspecoesObra.FirstOrDefault(x => x.Id == alteracao.IdInspecao);
                            }
                            else
                            {
                                inspecaoCadastrada = servicoCadastrado.InspecoesObra.FirstOrDefault(x => x.IdGuidInspecao == alteracao.IdGuidInspecao);
                            }
                            if (inspecaoCadastrada != null)
                            {
                                inspecaoCadastrada.DataEncerramento = inspecaoVM.DataEncerramento;
                                inspecaoCadastrada.DataInspecao = inspecaoVM.DataInspecao;
                                inspecaoCadastrada.Local = inspecaoVM.Local;
                                inspecaoCadastrada.Delete = inspecaoVM.Delete;
                                inspecaoCadastrada.IdFuncionarioAprovado = inspecaoVM.IdFuncionarioAprovado;
                                inspecaoCadastrada.IdFuncionarioInspecionado = inspecaoVM.IdFuncionarioInspecionado;
                                inspecaoCadastrada.Status = inspecaoVM.Status;
                            }
                        }
                    }
                }
                else
                {
                    if (inspecaoVM.Id == 0)
                    {
                        var inspecaoInserida = inspecoes.FirstOrDefault(x => x.IdGuidInspecao == inspecaoVM.IdGuidInspecao);
                        if (inspecaoInserida == null)
                        {
                            inspecoes.Add(inspecaoVM);
                        }
                        else
                        {
                            var indice = inspecoes.FindIndex(x => x.IdGuidInspecao == inspecaoVM.IdGuidInspecao);
                            if (indice > -1)
                            {
                                inspecoes.RemoveAt(indice);
                                inspecoes.Add(inspecaoVM);
                            }
                        }
                    }
                    else
                    {
                        var inspecaoInserida = inspecoes.FirstOrDefault(x => x.Id == inspecaoVM.Id);
                        if (inspecaoInserida == null)
                        {
                            inspecoes.Add(inspecaoVM);
                        }
                        else
                        {
                            var indice = inspecoes.FindIndex(x => x.Id == inspecaoVM.Id);
                            if(indice > -1)
                            {
                                inspecoes.RemoveAt(indice);
                                inspecoes.Add(inspecaoVM);
                            }
                        }
                    }
                }
            }
        }

        private string PersistirAreas(List<AreaVM> areas, string status)
        {
            foreach (var areaVM in areas)
            {
                try
                {
                    var areaBD = Mapper.Map<Area>(areaVM);
                    if (areaVM.Id == 0)
                    {
                        _areaService.Adicionar(areaBD);
                    }
                    else
                    {
                        areaBD.Obra = null;
                        areaBD.Servicos = null;
                        _areaService.Atualizar(areaBD);
                    }
                }
                catch (Exception ex)
                {
                    status += "Falha ao " + (areaVM.Id != 0 ? (areaVM.Delete.HasValue && areaVM.Delete.Value ? "inativar" : "reativar") : "inserir") + " área " + areaVM.Descricao + " com id " + areaVM.Id + "; ";
                    continue;
                }
            }
            return status;
        }

        private string PersistirServicos(List<ServicoVM> servicos, string status)
        {
            foreach (var servicoVM in servicos)
            {
                try
                {
                    var servicoBD = Mapper.Map<Servico>(servicoVM);
                    servicoBD.Area = null;
                    servicoBD.ChecklistItem = null;
                    servicoBD.InspecoesObra = null;
                    servicoBD.Obra = null;
                    _servicoService.Atualizar(servicoBD);
                }
                catch (Exception ex)
                {
                    status += "Falha ao " + (servicoVM.Delete.HasValue && servicoVM.Delete.Value ? "inativar" : "reativar") + " serviço " + servicoVM.Descricao + " com id " + servicoVM.Id + "; ";
                    continue;
                }
            }
            return status;
        }

        private string PersistirInspecoes(List<InspecaoObraVM> inspecoes, string status)
        {
            foreach (var inspecaoVM in inspecoes)
            {
                try
                {
                    var inspecaoBD = Mapper.Map<InspecaoObra>(inspecaoVM);
                    if (inspecaoVM.Id == 0)
                    {
                        _inspecaoService.Adicionar(inspecaoBD);
                    }
                    else
                    {
                        inspecaoBD.ObraChecklistServico = null;
                        inspecaoBD.FuncionarioAprovado = null;
                        inspecaoBD.FuncionarioInspecionado = null;
                        _inspecaoService.Atualizar(inspecaoBD);
                    }
                }
                catch (Exception ex)
                {
                    status += "Falha ao " + (inspecaoVM.Id != 0 ? "editar" : "inserir") + " inspeção " + inspecaoVM.Local + " com id " + inspecaoVM.Id + "; ";
                    continue;
                }
            }
            return status;
        }
    }
}

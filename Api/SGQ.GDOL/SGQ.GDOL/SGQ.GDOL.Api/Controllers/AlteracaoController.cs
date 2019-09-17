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
        private readonly IChecklistServicoService _checklistServicoService;
        private readonly IInspecaoObraItemService _inspecaoObraItemService;
        private readonly IOcorrenciaService _ocorrenciaService;

        public AlteracaoController(
            IAreaService areaService,
            IServicoService servicoService,
            IChecklistServicoService checklistServicoService,
            IInspecaoService inspecaoService,
            IInspecaoObraItemService inspecaoObraItemService,
            IOcorrenciaService ocorrenciaService)
        {
            _areaService = areaService;
            _servicoService = servicoService;
            _checklistServicoService = checklistServicoService;
            _inspecaoService = inspecaoService;
            _inspecaoObraItemService = inspecaoObraItemService;
            _ocorrenciaService = ocorrenciaService;
        }

        [HttpPost]
        public IActionResult Post([FromBody] List<AlteracaoDTO> alteracoes)
        {
            var status = PrepararAlteracoes(alteracoes);
            return Ok(status);
        }

        private string PrepararAlteracoes(List<AlteracaoDTO> alteracoes)
        {
            string status = "";
            List<AreaVM> areas = new List<AreaVM>();
            List<ServicoVM> servicos = new List<ServicoVM>();
            List<InspecaoObraVM> inspecoes = new List<InspecaoObraVM>();
            List<OcorrenciaVM> ocorrencias = new List<OcorrenciaVM>();
            List<ChecklistItem> checklists = new List<ChecklistItem>();

            PrepararChecklists(alteracoes, checklists);
            PrepararAreas(alteracoes, areas, checklists);
            PrepararServicos(alteracoes, areas, servicos, checklists);
            PrepararInspecoes(alteracoes, areas, servicos, inspecoes);
            PrepararOcorrencias(alteracoes, areas, servicos, inspecoes, ocorrencias);

            status = PersistirServicos(servicos, status);
            status = PersistirAreas(areas, status);
            status = PersistirInspecoes(inspecoes, status);
            status = PersistirOcorrencias(ocorrencias, status);

            return status;
        }

        private void PrepararChecklists(List<AlteracaoDTO> alteracoes, List<ChecklistItem> checklists)
        {
            var itensNovos = alteracoes.Where(x => x.Entidade == "Checklist" && x.Tipo == "Insert");

            foreach (var alteracao in itensNovos)
            {
                var checklistVM = JsonConvert.DeserializeObject<ChecklistItemVM>(alteracao.Valor);
                var checklistBD = Mapper.Map<ChecklistItem>(checklistVM);
                var entity = _checklistServicoService.Adicionar(checklistBD);
                checklists.Add(entity);
            }

        }

        private static void PrepararServicos(List<AlteracaoDTO> alteracoes, List<AreaVM> areas, List<ServicoVM> servicos, List<ChecklistItem> checklists)
        {
            var servicosAlterados = alteracoes.Where(x => x.Entidade.ToUpper() == "SERVICO");

            foreach (var alteracao in servicosAlterados)
            {
                var servicoVM = JsonConvert.DeserializeObject<ServicoVM>(alteracao.Valor);

                if (servicoVM.IdChecklist == 0)
                {
                    var checklistNovo = checklists.FirstOrDefault(x => x.IdGuid == servicoVM.IdChecklistGuid);
                    servicoVM.IdChecklist = checklistNovo.Id;
                }

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

        private static void PrepararAreas(List<AlteracaoDTO> alteracoes, List<AreaVM> areas, List<ChecklistItem> checklists)
        {
            var areasCadastradas = alteracoes.Where(x => x.Entidade.ToUpper() == "AREA" && x.Tipo.ToUpper() == "INSERT");
            var areasAlteradas = alteracoes.Where(x => x.Entidade.ToUpper() == "AREA" && x.Tipo.ToUpper() == "UPDATE" && x.IdArea != 0);
            var areasNovasAlteradas = alteracoes.Where(x => x.Entidade.ToUpper() == "AREA" && x.Tipo.ToUpper() == "UPDATE" && x.IdArea == 0);

            foreach (var alteracao in areasCadastradas)
            {
                var areaVM = JsonConvert.DeserializeObject<AreaVM>(alteracao.Valor);
                areaVM.IdGuidArea = alteracao.IdGuidArea;

                foreach (var item in areaVM.Servicos)
                {
                    if (item.IdChecklist == 0)
                    {
                        var checklistNovo = checklists.FirstOrDefault(x => x.IdGuid == item.IdChecklistGuid);
                        item.IdChecklist = checklistNovo.Id;
                    }
                }

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
                                inspecaoCadastrada.Campo1 = inspecaoVM.Campo1;
                                inspecaoCadastrada.Campo2 = inspecaoVM.Campo2;
                                inspecaoCadastrada.Campo3 = inspecaoVM.Campo3;
                                inspecaoCadastrada.Campo4 = inspecaoVM.Campo4;
                                inspecaoCadastrada.Delete = inspecaoVM.Delete;
                                inspecaoCadastrada.IdFuncionarioAprovado = inspecaoVM.IdFuncionarioAprovado;
                                inspecaoCadastrada.IdFuncionarioInspecionado = inspecaoVM.IdFuncionarioInspecionado;
                                inspecaoCadastrada.Status = inspecaoVM.Status;
                                for (int i = 0; i < inspecaoVM.InspecaoObraItens.ToArray().Length; i++)
                                {
                                    inspecaoCadastrada.InspecaoObraItens[i].Inspecao1 = inspecaoVM.InspecaoObraItens[i].Inspecao1;
                                    inspecaoCadastrada.InspecaoObraItens[i].Inspecao2 = inspecaoVM.InspecaoObraItens[i].Inspecao2;
                                }
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

        private static void PrepararOcorrencias(List<AlteracaoDTO> alteracoes, List<AreaVM> areas, List<ServicoVM> servicos, List<InspecaoObraVM> inspecoes, List<OcorrenciaVM> ocorrencias)
        {
            var ocorrenciasAlteradas = alteracoes.Where(x => x.Entidade.ToUpper() == "OCORRENCIA");

            foreach (var alteracao in ocorrenciasAlteradas)
            {
                var ocorrenciaVM = JsonConvert.DeserializeObject<OcorrenciaVM>(alteracao.Valor);
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
                            if (alteracao.Tipo.ToUpper() == "INSERT")
                            {
                                inspecaoCadastrada.Ocorrencias.Add(ocorrenciaVM);
                            }
                            else
                            {
                                OcorrenciaVM ocorrenciaCadastrada;
                                if (alteracao.IdOcorrencia != 0)
                                {
                                    ocorrenciaCadastrada = inspecaoCadastrada.Ocorrencias.FirstOrDefault(x => x.Id == alteracao.IdOcorrencia);
                                }
                                else
                                {
                                    ocorrenciaCadastrada = inspecaoCadastrada.Ocorrencias.FirstOrDefault(x => x.IdGuidOcorrencia == alteracao.IdGuidOcorrencia);
                                }
                                if (ocorrenciaCadastrada != null)
                                {
                                    ocorrenciaCadastrada.DataDescricao = ocorrenciaVM.DataDescricao;
                                    ocorrenciaCadastrada.Descricao = ocorrenciaVM.Descricao;
                                    ocorrenciaCadastrada.DataTratativa = ocorrenciaVM.DataTratativa;
                                    ocorrenciaCadastrada.Tratativa = ocorrenciaVM.Tratativa;
                                    ocorrenciaCadastrada.Delete = ocorrenciaVM.Delete;
                                }
                            }
                        }
                    }
                }
                else
                {
                    InspecaoObraVM inspecaoCadastrada = inspecoes.FirstOrDefault(x => x.IdGuidInspecao == alteracao.IdGuidInspecao && alteracao.IdGuidInspecao != null);
                    if (inspecaoCadastrada != null)
                    {
                        if (alteracao.Tipo.ToUpper() == "INSERT")
                        {
                            if (!inspecaoCadastrada.Ocorrencias.Any(x => x.IdGuidOcorrencia == ocorrenciaVM.IdGuidOcorrencia))
                            {
                                inspecaoCadastrada.Ocorrencias.Add(ocorrenciaVM);
                            }
                        }
                        else
                        {
                            OcorrenciaVM ocorrenciaCadastrada;
                            if (alteracao.IdOcorrencia != 0)
                            {
                                ocorrenciaCadastrada = inspecaoCadastrada.Ocorrencias.FirstOrDefault(x => x.Id == alteracao.IdOcorrencia);
                            }
                            else
                            {
                                ocorrenciaCadastrada = inspecaoCadastrada.Ocorrencias.FirstOrDefault(x => x.IdGuidOcorrencia == alteracao.IdGuidOcorrencia);
                            }
                            if (ocorrenciaCadastrada != null)
                            {
                                ocorrenciaCadastrada.DataDescricao = ocorrenciaVM.DataDescricao;
                                ocorrenciaCadastrada.Descricao = ocorrenciaVM.Descricao;
                                ocorrenciaCadastrada.DataTratativa = ocorrenciaVM.DataTratativa;
                                ocorrenciaCadastrada.Tratativa = ocorrenciaVM.Tratativa;
                                ocorrenciaCadastrada.Delete = ocorrenciaVM.Delete;
                            }
                        }
                    }
                    else
                    {
                        var ocorrenciaInserida = ocorrencias.FirstOrDefault(x => x.IdGuidOcorrencia != null ? (x.IdGuidOcorrencia == ocorrenciaVM.IdGuidOcorrencia) : (x.Id == ocorrenciaVM.Id));
                        if (ocorrenciaInserida == null)
                        {
                            ocorrencias.Add(ocorrenciaVM);
                        }
                        else
                        {
                            var indice = ocorrencias.FindIndex(x => x.IdGuidOcorrencia != null ? (x.IdGuidOcorrencia == ocorrenciaVM.IdGuidOcorrencia) : (x.Id == ocorrenciaVM.Id));
                            if (indice > -1)
                            {
                                ocorrencias.RemoveAt(indice);
                                ocorrencias.Add(ocorrenciaVM);
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
                        inspecaoBD.FuncionarioAprovadoObj = null;
                        inspecaoBD.FuncionarioInspecionadoObj = null;
                        _inspecaoService.Atualizar(inspecaoBD);
                        foreach (var item in inspecaoVM.InspecaoObraItens)
                        {
                            var inspecaoItem = inspecaoBD.InspecaoObraItens.FirstOrDefault(x => x.IdItemServico == item.IdItemServico);
                            if (inspecaoItem != null)
                            {
                                inspecaoItem.Inspecao1 = item.Inspecao1;
                                inspecaoItem.Inspecao2 = item.Inspecao2 == "RA" ? "A" : item.Inspecao2;
                                _inspecaoObraItemService.Atualizar(inspecaoItem);
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    status += "Falha ao " + (inspecaoVM.Id != 0 ? "editar" : "inserir") + " inspeção " + inspecaoVM.Campo1 + " com id " + inspecaoVM.Id + "; ";
                    continue;
                }
            }
            return status;
        }

        private string PersistirOcorrencias(List<OcorrenciaVM> ocorrencias, string status)
        {
            foreach (var ocorrenciaVM in ocorrencias)
            {
                try
                {
                    var ocorrenciaBD = Mapper.Map<Ocorrencia>(ocorrenciaVM);
                    ocorrenciaBD.InspecaoObra = null;
                    if(ocorrenciaBD.Id == 0)
                    {
                        _ocorrenciaService.Adicionar(ocorrenciaBD);
                    }
                    else
                    {
                        _ocorrenciaService.Atualizar(ocorrenciaBD);
                    }
                }
                catch (Exception ex)
                {
                    status += "Falha ao criar/editar/excluir a ocorrência " + ocorrenciaVM.Descricao + ";";
                    continue;
                }
            }
            return status;
        }
    }
}

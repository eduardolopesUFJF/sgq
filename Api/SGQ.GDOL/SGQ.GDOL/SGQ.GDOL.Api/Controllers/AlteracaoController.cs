using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;
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
        private readonly IEntregaObraService _entregaObraService;
        private readonly IEntregaObraClienteService _entregaObraClienteService;
        private readonly IEntregaObraClienteChecklistService _entregaObraClienteChecklistService;
        private readonly IAssistenciaTecnicaService _assistenciaTecnicaService;
        private readonly IAtendimentoService _atendimentoService;
        private readonly IAssistenciaTecnicaArquivoService _assistenciaTecnicaArquivoService;

        public AlteracaoController(
            IAreaService areaService,
            IServicoService servicoService,
            IChecklistServicoService checklistServicoService,
            IInspecaoService inspecaoService,
            IInspecaoObraItemService inspecaoObraItemService,
            IOcorrenciaService ocorrenciaService,
            IEntregaObraService entregaObraService,
            IEntregaObraClienteService entregaObraClienteService,
            IEntregaObraClienteChecklistService entregaObraClienteChecklistService,
            IAssistenciaTecnicaService assistenciaTecnicaService,
            IAtendimentoService atendimentoService,
            IAssistenciaTecnicaArquivoService assistenciaTecnicaArquivoService)
        {
            _areaService = areaService;
            _servicoService = servicoService;
            _checklistServicoService = checklistServicoService;
            _inspecaoService = inspecaoService;
            _inspecaoObraItemService = inspecaoObraItemService;
            _ocorrenciaService = ocorrenciaService;
            _entregaObraService = entregaObraService;
            _entregaObraClienteService = entregaObraClienteService;
            _entregaObraClienteChecklistService = entregaObraClienteChecklistService;
            _assistenciaTecnicaService = assistenciaTecnicaService;
            _atendimentoService = atendimentoService;
            _assistenciaTecnicaArquivoService = assistenciaTecnicaArquivoService;
        }

        #region ENTREGA OBRA

        [HttpPost("entrega-obra")]
        public IActionResult PostEntregaObra([FromBody] List<AlteracaoDTO> alteracoes)
        {
            var status = PrepararAlteracoesEntregaObra(alteracoes);
            return Ok(status);
        }

        private string PrepararAlteracoesEntregaObra(List<AlteracaoDTO> alteracoes)
        {
            string status = "";
            List<EntregaObraVM> entregasObras = new List<EntregaObraVM>();
            List<EntregaObraClienteVM> entregasObrasClientes = new List<EntregaObraClienteVM>();
            List<AssistenciaTecnicaVM> assistenciasTecnicas = new List<AssistenciaTecnicaVM>();
            List<AtendimentoVM> atendimentos = new List<AtendimentoVM>();
            List<AssistenciaTecnicaArquivoVM> fotos = new List<AssistenciaTecnicaArquivoVM>();

            PrepararEntregaObra(alteracoes, entregasObras);
            PrepararEntregaObraCliente(alteracoes, entregasObrasClientes);
            PrepararAssistenciasTecnicas(alteracoes, assistenciasTecnicas);
            PrepararAtendimentos(alteracoes, assistenciasTecnicas, atendimentos);
            PrepararFotos(alteracoes, assistenciasTecnicas, fotos);

            status = PersistirEntregaObra(entregasObras, status);
            status = PersistirEntregaObraCliente(entregasObrasClientes, status);
            status = PersistirAssistenciasTecnicas(assistenciasTecnicas, status);
            status = PersistirAtendimentos(atendimentos, status);
            status = PersistirFotos(fotos, status);

            return status;
        }

        private static void PrepararEntregaObra(List<AlteracaoDTO> alteracoes, List<EntregaObraVM> entregasObras)
        {
            var entregasObrasEditadas = alteracoes.Where(x => x.Entidade.ToUpper() == "ENTREGAOBRA");

            foreach (var alteracao in entregasObrasEditadas)
            {
                var entregaObraVM = JsonConvert.DeserializeObject<EntregaObraVM>(alteracao.Valor);

                entregasObras.Add(entregaObraVM);
            }
        }

        private static void PrepararEntregaObraCliente(List<AlteracaoDTO> alteracoes, List<EntregaObraClienteVM> entregasObrasClientes)
        {
            var entregasObrasClientesCadastradas = alteracoes.Where(x => x.Entidade.ToUpper() == "ENTREGAOBRACLIENTE" && x.Tipo.ToUpper() == "INSERT");
            var entregasObrasClientesNovasAlteradas = alteracoes.Where(x => x.Entidade.ToUpper() == "ENTREGAOBRACLIENTE" && x.Tipo.ToUpper() == "UPDATE" && x.IdEntregaObraCliente == 0);
            var entregasObrasClientesAlteradas = alteracoes.Where(x => x.Entidade.ToUpper() == "ENTREGAOBRACLIENTE" && x.Tipo.ToUpper() == "UPDATE" && x.IdEntregaObraCliente != 0);

            foreach (var alteracao in entregasObrasClientesCadastradas)
            {
                var entregaObraClienteVM = JsonConvert.DeserializeObject<EntregaObraClienteVM>(alteracao.Valor);
                entregaObraClienteVM.IdGuidEntregaObraCliente = alteracao.IdGuidEntregaObraCliente;

                entregasObrasClientes.Add(entregaObraClienteVM);
            }

            foreach (var alteracao in entregasObrasClientesNovasAlteradas)
            {
                var entregaObraClienteVM = JsonConvert.DeserializeObject<EntregaObraClienteVM>(alteracao.Valor);
                var indice = entregasObrasClientes.FindIndex(x => x.IdGuidEntregaObraCliente == alteracao.IdGuidEntregaObraCliente);
                if (indice > -1)
                {
                    entregasObrasClientes.RemoveAt(indice);
                    entregasObrasClientes.Add(entregaObraClienteVM);
                }
            }

            foreach (var alteracao in entregasObrasClientesAlteradas)
            {
                var entregaObraClienteVM = JsonConvert.DeserializeObject<EntregaObraClienteVM>(alteracao.Valor);
                entregasObrasClientes.Add(entregaObraClienteVM);
            }
        }

        private static void PrepararAssistenciasTecnicas(List<AlteracaoDTO> alteracoes, List<AssistenciaTecnicaVM> assistenciasTecnicas)
        {
            var assistenciasTecnicasCadastradas = alteracoes.Where(x => x.Entidade.ToUpper() == "ASSISTENCIATECNICA" && x.Tipo.ToUpper() == "INSERT");
            var assistenciasTecnicasNovasAlteradas = alteracoes.Where(x => x.Entidade.ToUpper() == "ASSISTENCIATECNICA" && x.Tipo.ToUpper() == "UPDATE" && x.IdAssistenciaTecnica == 0);
            var assistenciasTecnicasAlteradas = alteracoes.Where(x => x.Entidade.ToUpper() == "ASSISTENCIATECNICA" && x.Tipo.ToUpper() == "UPDATE" && x.IdAssistenciaTecnica != 0);

            foreach (var alteracao in assistenciasTecnicasCadastradas)
            {
                var assistenciaTecnicaVM = JsonConvert.DeserializeObject<AssistenciaTecnicaVM>(alteracao.Valor);
                assistenciaTecnicaVM.IdGuid = alteracao.IdGuidAssistenciaTecnica;

                assistenciasTecnicas.Add(assistenciaTecnicaVM);
            }

            foreach (var alteracao in assistenciasTecnicasNovasAlteradas)
            {
                var assistenciaTecnicaVM = JsonConvert.DeserializeObject<AssistenciaTecnicaVM>(alteracao.Valor);
                var indice = assistenciasTecnicas.FindIndex(x => x.IdGuid == alteracao.IdGuidAssistenciaTecnica);
                if (indice > -1)
                {
                    assistenciasTecnicas.RemoveAt(indice);
                    assistenciasTecnicas.Add(assistenciaTecnicaVM);
                }
            }

            foreach (var alteracao in assistenciasTecnicasAlteradas)
            {
                var assistenciaTecnicaVM = JsonConvert.DeserializeObject<AssistenciaTecnicaVM>(alteracao.Valor);
                assistenciasTecnicas.Add(assistenciaTecnicaVM);
            }
        }

        private static void PrepararAtendimentos(List<AlteracaoDTO> alteracoes, List<AssistenciaTecnicaVM> assistenciasTecnicas, List<AtendimentoVM> atendimentos)
        {
            var atendimentosCadastradas = alteracoes.Where(x => x.Entidade.ToUpper() == "ATENDIMENTO" && x.Tipo.ToUpper() == "INSERT");
            var atendimentosNovosAlteradas = alteracoes.Where(x => x.Entidade.ToUpper() == "ATENDIMENTO" && x.Tipo.ToUpper() == "UPDATE" && x.IdAtendimento == 0);
            var atendimentosAlteradas = alteracoes.Where(x => x.Entidade.ToUpper() == "ATENDIMENTO" && x.Tipo.ToUpper() == "UPDATE" && x.IdAtendimento != 0);

            foreach (var alteracao in atendimentosCadastradas)
            {
                var atendimentoVM = JsonConvert.DeserializeObject<AtendimentoVM>(alteracao.Valor);
                atendimentoVM.IdGuid = alteracao.IdGuidAtendimento;

                atendimentos.Add(atendimentoVM);
            }

            foreach (var alteracao in atendimentosNovosAlteradas)
            {
                var atendimentoVM = JsonConvert.DeserializeObject<AtendimentoVM>(alteracao.Valor);
                var indice = atendimentos.FindIndex(x => x.IdGuid == alteracao.IdGuidAtendimento);
                if (indice > -1)
                {
                    atendimentos.RemoveAt(indice);
                    atendimentos.Add(atendimentoVM);
                }
            }

            foreach (var alteracao in atendimentosAlteradas)
            {
                var atendimentoVM = JsonConvert.DeserializeObject<AtendimentoVM>(alteracao.Valor);
                atendimentos.Add(atendimentoVM);
            }

            foreach (var atendimento in atendimentos)
            {
                if (atendimento.IdAssistenciaTecnica == 0)
                {
                    var assistenciaTecnica = assistenciasTecnicas.FirstOrDefault(x => x.IdGuid.Equals(atendimento.IdGuidAssistenciaTecnica));
                    if (assistenciaTecnica != null)
                    {
                        var indice = assistenciaTecnica.Atendimentos.FindIndex(x => x.IdGuid == atendimento.IdGuid);
                        if (indice == -1)
                        {
                            assistenciaTecnica.Atendimentos.Add(atendimento);
                        }
                        else
                        {
                            assistenciaTecnica.Atendimentos.RemoveAt(indice);
                            assistenciaTecnica.Atendimentos.Add(atendimento);
                        }
                    }

                }
            }
            atendimentos = atendimentos.Where(x => x.IdAssistenciaTecnica != 0).ToList();
        }

        private static void PrepararFotos(List<AlteracaoDTO> alteracoes, List<AssistenciaTecnicaVM> assistenciasTecnicas, List<AssistenciaTecnicaArquivoVM> fotos)
        {
            var fotosEnviadas = alteracoes.Where(x => x.Entidade.ToUpper() == "ASSISTENCIATECNICAARQUIVO");
            var arquivos = fotosEnviadas.Select(x => JsonConvert.DeserializeObject<AssistenciaTecnicaArquivoVM>(x.Valor)).ToList();

            foreach (var arquivo in arquivos)
            {
                if (arquivo.IdAssistenciaTecnica == 0)
                {
                    var assistenciaTecnica = assistenciasTecnicas.FirstOrDefault(x => x.IdGuid.Equals(arquivo.IdGuidAssistenciaTecnica));
                    if (assistenciaTecnica != null)
                    {
                        var indice = assistenciaTecnica.Arquivos.FindIndex(x => x.IdGuid == arquivo.IdGuid);
                        if (indice == -1)
                        {
                            assistenciaTecnica.Arquivos.Add(arquivo);
                        }
                        else
                        {
                            assistenciaTecnica.Arquivos.RemoveAt(indice);
                            assistenciaTecnica.Arquivos.Add(arquivo);
                        }
                    }
                }
                else
                {
                    fotos.Add(arquivo);
                }
            }
        }

        private string PersistirEntregaObra(List<EntregaObraVM> entregasObras, string status)
        {
            foreach (var entregaObraVM in entregasObras)
            {
                try
                {
                    var entregaObraBD = Mapper.Map<EntregaObra>(entregaObraVM);
                    entregaObraBD.CentroCusto = null;
                    entregaObraBD.EntregasObrasClientes = null;
                    _entregaObraService.Atualizar(entregaObraBD);
                }
                catch (Exception ex)
                {
                    status += "Falha ao alterar situação da obra " + entregaObraVM.Descricao + " com id " + entregaObraVM.Id + "; ";
                    continue;
                }
            }
            return status;
        }

        private string PersistirEntregaObraCliente(List<EntregaObraClienteVM> entregasObrasClientes, string status)
        {
            foreach (var entregaObraClienteVM in entregasObrasClientes)
            {
                try
                {
                    var entregaObraClienteBD = Mapper.Map<EntregaObraCliente>(entregaObraClienteVM);
                    if (entregaObraClienteBD.Id == 0)
                    {
                        _entregaObraClienteService.Inserir(entregaObraClienteBD);
                    }
                    else
                    {
                        for (int i = 0; i < entregaObraClienteBD.EntregasObrasClientesChecklists.Count; i++)
                        {
                            var entregaObraClienteChecklist = entregaObraClienteBD.EntregasObrasClientesChecklists.ElementAt(i);
                            if (entregaObraClienteChecklist.Id == 0)
                            {
                                if (i == 0)
                                {
                                    _entregaObraClienteChecklistService.RemoverAtuais(entregaObraClienteBD.Id);
                                }
                                _entregaObraClienteChecklistService.Adicionar(entregaObraClienteChecklist);
                            }
                            else
                            {
                                _entregaObraClienteChecklistService.Atualizar(entregaObraClienteChecklist);
                            }
                        }

                        entregaObraClienteBD.ChecklistObra = null;
                        entregaObraClienteBD.ClienteConstrutora = null;
                        entregaObraClienteBD.EntregaObra = null;
                        entregaObraClienteBD.FuncionarioInspecao = null;
                        entregaObraClienteBD.FuncionarioReinspecao = null;
                        entregaObraClienteBD.EntregasObrasClientesChecklists = null;
                        
                        _entregaObraClienteService.Atualizar(entregaObraClienteBD);
                    }
                }
                catch (Exception ex)
                {
                    status += "Falha ao alterar persistir " + entregaObraClienteVM.LocalVistoria + " com id " + entregaObraClienteVM.Id + "; ";
                    continue;
                }
            }
            return status;
        }

        private string PersistirAssistenciasTecnicas(List<AssistenciaTecnicaVM> assistenciasTecnicas, string status)
        {
            foreach (var assistenciaTecnicaVM in assistenciasTecnicas)
            {
                try
                {
                    var assistenciaTecnicaBD = Mapper.Map<AssistenciaTecnica>(assistenciaTecnicaVM);
                    if (assistenciaTecnicaBD.Id == 0)
                    {
                        _assistenciaTecnicaService.Adicionar(assistenciaTecnicaBD);
                    }
                    else
                    {
                        assistenciaTecnicaBD.Arquivos = null;
                        assistenciaTecnicaBD.Atendimentos = null;
                        assistenciaTecnicaBD.CategoriaAssistencia = null;
                        assistenciaTecnicaBD.CentroCusto = null;
                        assistenciaTecnicaBD.ClienteConstrutora = null;

                        _assistenciaTecnicaService.Atualizar(assistenciaTecnicaBD);
                    }
                }
                catch (Exception ex)
                {
                    status += "Falha ao alterar persistir " + assistenciaTecnicaVM.Local+ " com id " + assistenciaTecnicaVM.Id + "; ";
                    continue;
                }
            }
            return status;
        }

        private string PersistirAtendimentos(List<AtendimentoVM> atendimentosVM, string status)
        {
            foreach (var atendimentoVM in atendimentosVM)
            {
                try
                {
                    var atendimentoBD = Mapper.Map<Atendimento>(atendimentoVM);
                    if (atendimentoBD.Id == 0)
                    {
                        _atendimentoService.Adicionar(atendimentoBD);
                    }
                    else
                    {
                        atendimentoBD.AssistenciaTecnica = null;
                        atendimentoBD.Funcionario = null;

                        _atendimentoService.Atualizar(atendimentoBD);
                    }
                }
                catch (Exception ex)
                {
                    status += "Falha ao alterar persistir " + atendimentoVM.Descricao+ " com id " + atendimentoVM.Id + "; ";
                    continue;
                }
            }
            return status;
        }

        private string PersistirFotos(List<AssistenciaTecnicaArquivoVM> arquivosVM, string status)
        {
            foreach (var arquivoVM in arquivosVM)
            {
                try
                {
                    var arquivoBD = Mapper.Map<AssistenciaTecnicaArquivo>(arquivoVM);
                    _assistenciaTecnicaArquivoService.Adicionar(arquivoBD);
                }
                catch (Exception ex)
                {
                    status += "Falha ao alterar persistir " + arquivoVM.Nome + " com id " + arquivoVM.Id + "; ";
                    continue;
                }
            }
            return status;
        }

        #endregion

        #region CHECKLIST 
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

        #endregion 
    }
}

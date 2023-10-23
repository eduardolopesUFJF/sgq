using AutoMapper;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.DTO;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.RHRoot.Entity;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using System;
using System.Linq;

namespace SGQ.GDOL.Api.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<Funcionario, FuncionarioVM>();
            CreateMap<ItemChecklistServico, ItemChecklistServicoVM>();
            CreateMap<ItemChecklistObra, ItemChecklistObraVM>();
            CreateMap<InspecaoObraItem, InspecaoObraItemVM>();
            CreateMap<CategoriaAssistencia, CategoriaAssistenciaVM>();
            CreateMap<AssistenciaTecnicaArquivo, AssistenciaTecnicaArquivoVM>();
            CreateMap<EntregaObraClienteArquivo, EntregaObraClienteArquivoVM>();
            CreateMap<FuncionarioTerceirizado, FuncionarioTerceirizadoVM>();
            CreateMap<RealizadoPorFuncionario, RealizadoPorFuncionarioVM>();
            CreateMap<ItemPesquisaSatisfacao, ItemPesquisaSatisfacaoVM>();
            
            CreateMap<Ocorrencia, OcorrenciaVM>()
                .ForMember(x => x.DescricaoInspecaoObraItem, opt => opt.MapFrom(x => x.InspecaoObraItem.Ordem + " - " + x.InspecaoObraItem.Descricao));

            CreateMap<EntregaObraClienteOcorrencia, EntregaObraClienteOcorrenciaVM>()
                .ForMember(x => x.DescricaoItemChecklistEntrega, opt => opt.MapFrom(x => x.EntregaObraClienteChecklist.Ordem + " - " + x.EntregaObraClienteChecklist.Descricao));
            
            CreateMap<PesquisaSatisfacao, PesquisaSatisfacaoVM>()
                .ForMember(x => x.ItensPesquisaSatisfacao, opt => opt.MapFrom(x => x.ItensPesquisaSatisfacao.Where(y => y.Delete.HasValue && !y.Delete.Value).OrderBy(y => y.Ordem)));

            CreateMap<PesquisaSatisfacaoCliente, PesquisaSatisfacaoClienteVM>()
                .ForMember(x => x.DescricaoPesquisaSatisfacao, opt => opt.MapFrom(x => x.PesquisaSatisfacao.Codigo + " - " + x.PesquisaSatisfacao.Descricao));

            CreateMap<ItemPesquisaSatisfacaoCliente, ItemPesquisaSatisfacaoClienteVM>()
                .ForMember(x => x.DescricaoItemPesquisaSatisfacao, opt => opt.MapFrom(x => x.ItemPesquisaSatisfacao.Descricao));

            CreateMap<ConfiguracaoCliente, ClienteDTO>()
                .ForMember(x => x.Title, opt => opt.MapFrom(x => x.Nome));

            CreateMap<RealizadoPor, RealizadoPorVM>()
                .ForMember(x => x.NomeFornecedor, opt => opt.MapFrom(x => x.Fornecedor.Nome))
                .ForMember(x => x.NomeCentroCusto, opt => opt.MapFrom(x => x.CentroCusto.Descricao))
                .ForMember(x => x.NomesFuncionarios, opt => opt.MapFrom(x => x.RealizadosPorFuncionarios.Select(y => x.TipoFuncionario == 1 ? y.Funcionario.Nome
                                : (y.IdFuncionarioTerceirizado.HasValue ? y.FuncionarioTerceirizado.Nome : ""))));

            CreateMap<Treinamento, TreinamentoVM>()
                .ForMember(x => x.Nome, opt => opt.MapFrom(x => x.Nome + " (Versão: " + x.Descricao + ")"));

            CreateMap<TreinamentoFuncionario, TreinamentoFuncionarioVM>()
                .ForMember(x => x.DataPrevisaAvaliacao, opt => opt.MapFrom(x => x.DataInicio.HasValue ?
                                                                                x.DataInicio.Value.AddDays(x.DiasPrevisaoAvaliacao ?? 0)
                                                                                : x.DataInicio))
                .ForMember(x => x.NomeFuncionario, opt => opt.MapFrom(x => x.Funcionario.Nome))
                .ForMember(x => x.NomeTreinamento, opt => opt.MapFrom(x => x.Treinamento.Nome + " (Versão: " + x.Treinamento.Descricao + ")"))
                .ForMember(x => x.Assinatura, opt => opt.MapFrom(x => (x.Assinatura == null || x.Assinatura.Length == 0) ? null :
                                                                            "preenchido"));

            CreateMap<ClienteConstrutora, ClienteConstrutoraVM>()
                .ForMember(x => x.ClienteCentrosCustos, opt => opt.MapFrom(x => x.ClienteCentrosCustos.Where(y => !y.Delete)));

            CreateMap<ClienteCentroCusto, ClienteCentroCustoVM>()
                .ForMember(x => x.DescricaoCentroCusto, opt => opt.MapFrom(x => x.CentroCusto.Codigo + " - " + x.CentroCusto.Descricao));

            CreateMap<CentroCusto, CentroCustoVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.Codigo + " - " + x.Descricao));

            CreateMap<EntregaObraClienteChecklist, EntregaObraClienteChecklistVM>()
                .ForMember(x => x.OrdemItemChecklistEntrega, opt => opt.MapFrom(x => x.Ordem))
                .ForMember(x => x.DescricaoItemChecklistEntrega, opt => opt.MapFrom(x => x.Ordem + " - "+ x.Descricao));

            CreateMap<Servico, ServicoVM>()
                .ForMember(x => x.IdArea, opt => opt.MapFrom(x => x.IdObraAreaChecklist))
                .ForMember(x => x.IdChecklist, opt => opt.MapFrom(x => x.IdChecklistServico))
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.ChecklistItem.Codigo + " - " + x.ChecklistItem.Descricao))
                .ForMember(x => x.Tipo, opt => opt.MapFrom(x => x.ChecklistItem.Tipo == "C" ? "Controlado" : "Especializado"))
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Finalizado" : "Em aberto"))
                .ForMember(x => x.InspecoesObra, opt => opt.MapFrom(x => x.InspecoesObra.Where(y => !y.Delete)));

            CreateMap<Obra, ObraVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.CentroCusto.Codigo + " - " + x.CentroCusto.Descricao))
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Finalizado" : "Em aberto"))
                .ForMember(x => x.Areas, opt => opt.MapFrom(x => x.Areas.Where(y => y.Delete.HasValue && !y.Delete.Value).OrderBy(y => y.Descricao)));

            CreateMap<EntregaObra, EntregaObraVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.CentroCusto.Codigo + " - " + x.CentroCusto.Descricao))
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Finalizado" : (x.Status.HasValue && x.Status.Value == 2 ? "Aguardando Reinspeção" : "Em aberto")))
                .ForMember(x => x.EntregasObrasClientes, opt => opt.MapFrom(x => x.EntregasObrasClientes.Where(y => !y.Delete).OrderBy(y => y.DataInspecao)));

            CreateMap<Area, AreaVM>()
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status.HasValue && x.Status.Value == 1 ? "Finalizado" : "Em aberto"))
                .ForMember(x => x.Servicos, opt => opt.MapFrom(x => x.Servicos.Where(y => y.Delete.HasValue && !y.Delete.Value)));

            CreateMap<InspecaoObra, InspecaoObraVM>()
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status == 0 ? "Verificação não iniciada" :
                                                                   (x.Status == 1 ? "Encerrada" : (x.Status == 2 ? "Aprovada" : "Verificação iniciada"))))
                .ForMember(x => x.InspecaoObraItens, opt => opt.MapFrom(x => x.InspecaoObraItens.Where(y => !y.Delete).OrderBy(y => y.Ordem)))
                .ForMember(x => x.RealizadosPor, opt => opt.MapFrom(x => x.RealizadosPor.Where(y => y.Delete.HasValue && !y.Delete.Value)))
                .ForMember(x => x.FuncionarioAprovado, opt => opt.MapFrom(x => x.FuncionarioAprovadoObj.Nome))
                .ForMember(x => x.FuncionarioInspecionado, opt => opt.MapFrom(x => x.FuncionarioInspecionadoObj.Nome))
                .ForMember(x => x.Ocorrencias, opt => opt.MapFrom(x => x.Ocorrencias.Where(y => y.Delete.HasValue && !y.Delete.Value)))
                .ForMember(x => x.QtdNA, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao1.Equals("N"))))
                .ForMember(x => x.QtdA, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao1.Equals("A"))))
                .ForMember(x => x.QtdR, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao1.Equals("R"))))
                .ForMember(x => x.QtdRA, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao2.Equals("A"))))
                .ForMember(x => x.QtdX, opt => opt.MapFrom(x => x.InspecaoObraItens.Count(y => y.Inspecao2.Equals("X")) + x.InspecaoObraItens.Count(y => y.Inspecao1.Equals("X"))));

            CreateMap<EntregaObraCliente, EntregaObraClienteVM>()
                .ForMember(x => x.Unidade, opt => opt.MapFrom(x =>
                                                        x.CentroCusto.ClienteCentrosCustos.Any(y => y.IdCliente == x.IdClienteConstrutora) ?
                                                        x.CentroCusto.ClienteCentrosCustos.Where(y => y.IdCliente == x.IdClienteConstrutora).FirstOrDefault().Unidade
                                                        : ""))
                .ForMember(x => x.Situacao, opt => opt.MapFrom(x => x.Status == 1 ? "Finalizado" : "Em aberto"))
                .ForMember(x => x.DescricaoTipoVistoria, opt => opt.MapFrom(x => x.TipoVistoria == 1 ? "Construtora" : "Cliente"))
                .ForMember(x => x.DescricaoChecklistObra, opt => opt.MapFrom(x => x.ChecklistObra.Codigo + " - " + x.ChecklistObra.Descricao))
                .ForMember(x => x.ClienteCadastrado, opt => opt.MapFrom(x => x.IdClienteConstrutora.HasValue || string.IsNullOrEmpty(x.NomeCliente)))
                .ForMember(x => x.NomeCliente, opt => opt.MapFrom(x => x.ClienteCadastrado ? x.ClienteConstrutora.Nome : x.NomeCliente))
                .ForMember(x => x.FuncionarioInspecaoCadastrado, opt => opt.MapFrom(x => x.IdFuncionarioInspecao.HasValue || string.IsNullOrEmpty(x.NomeFuncionarioInspecao)))
                .ForMember(x => x.NomeFuncionarioInspecao, opt => opt.MapFrom(x => x.FuncionarioInspecaoCadastrado ? x.FuncionarioInspecao.Nome : x.NomeFuncionarioInspecao))
                .ForMember(x => x.FuncionarioReinspecaoCadastrado, opt => opt.MapFrom(x => x.IdFuncionarioReinspecao.HasValue || string.IsNullOrEmpty(x.NomeFuncionarioReinspecao)))
                .ForMember(x => x.NomeFuncionarioReinspecao, opt => opt.MapFrom(x => x.FuncionarioReinspecaoCadastrado ? x.FuncionarioReinspecao.Nome : x.NomeFuncionarioReinspecao))
                .ForMember(x => x.QtdNA, opt => opt.MapFrom(x => x.EntregasObrasClientesChecklists.Count(y => y.Inspecao1 == "N")))
                .ForMember(x => x.QtdA, opt => opt.MapFrom(x => x.EntregasObrasClientesChecklists.Count(y => y.Inspecao1 == "A")))
                .ForMember(x => x.QtdR, opt => opt.MapFrom(x => x.EntregasObrasClientesChecklists.Count(y => y.Inspecao1 == "R")))
                .ForMember(x => x.QtdRA, opt => opt.MapFrom(x => x.EntregasObrasClientesChecklists.Count(y => y.Inspecao2 == "A")))
                .ForMember(x => x.QtdX, opt => opt.MapFrom(x => x.EntregasObrasClientesChecklists.Count(y => y.Inspecao1 == "X")))
                .ForMember(x => x.Ocorrencias, opt => opt.MapFrom(x => x.Ocorrencias.Where(y => !y.Delete)))
                .ForMember(x => x.Arquivos, opt => opt.MapFrom(x => x.Arquivos.Where(y => !y.Delete)))
                .ForMember(x => x.TermosIds, opt => opt.MapFrom(x => x.Termos.Where(y => !y.Delete).Select(y => y.IdTermo)))
                .ForMember(x => x.AssinaturaCliente, opt => opt.MapFrom(x => (x.AssinaturaCliente == null || x.AssinaturaCliente.Length == 0) ? null :
                                                                            "preenchido"))
                .ForMember(x => x.AssinaturaConstrutora, opt => opt.MapFrom(x => (x.AssinaturaConstrutora == null || x.AssinaturaConstrutora.Length == 0) ? null :
                                                                            "preenchido"));

            CreateMap<ChecklistItem, ChecklistItemVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.Descricao))
                .ForMember(x => x.Tipo, opt => opt.MapFrom(x => x.Tipo == "C" ? "Controlado" : "Especializado"))
                .ForMember(x => x.ItensChecklistServico, opt => opt.MapFrom(x => x.ItensChecklistServico.OrderBy(y => y.Ordem)));

            CreateMap<ChecklistObra, ChecklistObraVM>()
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.Codigo + " - " + x.Descricao))
                .ForMember(x => x.ItensChecklistEntrega, opt => opt.MapFrom(x => x.ItensChecklistEntrega.OrderBy(y => y.Ordem)));

            CreateMap<AssistenciaTecnica, AssistenciaTecnicaVM>()
               .ForMember(x => x.PesquisasSatisfacaoCliente, opt => opt.MapFrom(x => x.PesquisasSatisfacaoCliente.Where(y => y.Delete.HasValue && !y.Delete.Value)))
               .ForMember(x => x.IdCategoriaAssistencia, opt => opt.MapFrom(x => x.AssistenciaTecnicaCategorias.Select(z => z.IdCategoriaAssistencia)))
               .ForMember(x => x.DescricaoCategoriaAssistencia, opt => opt.MapFrom(x => string.Join(", ", x.AssistenciaTecnicaCategorias.Select(z => z.CategoriaAssistencia.Nome))))
               .ForMember(x => x.Unidade, opt => opt.MapFrom(x =>
                                                        x.CentroCusto.ClienteCentrosCustos.Any(y => y.IdCliente == x.IdClienteConstrutora) ?
                                                        x.CentroCusto.ClienteCentrosCustos.Where(y => y.IdCliente == x.IdClienteConstrutora).FirstOrDefault().Unidade
                                                        : ""))
               .ForMember(x => x.ClienteCadastrado, opt => opt.MapFrom(x => x.IdClienteConstrutora.HasValue || string.IsNullOrEmpty(x.NomeCliente)))
               .ForMember(x => x.NomeCliente, opt => opt.MapFrom(x => x.ClienteCadastrado ? x.ClienteConstrutora.Nome : x.NomeCliente))
               .ForMember(x => x.DescricaoCentroCusto, opt => opt.MapFrom(x => x.CentroCusto.Codigo + " - " + x.CentroCusto.Descricao))
               .ForMember(x => x.Atendimentos, opt => opt.MapFrom(x => x.Atendimentos.Where(y => !y.Delete).OrderByDescending(y => y.DataInicio)))
               .ForMember(x => x.AssinaturaCliente, opt => opt.MapFrom(x => (x.AssinaturaCliente == null || x.AssinaturaCliente.Length == 0) ? null :
                                                                            "preenchido"))
               .ForMember(x => x.AssinaturaConstrutora, opt => opt.MapFrom(x => (x.AssinaturaConstrutora == null || x.AssinaturaConstrutora.Length == 0) ? null :
                                                                            "preenchido"));

            CreateMap<Atendimento, AtendimentoVM>()
                .ForMember(x => x.DescricaoFuncionario, opt => opt.MapFrom(x => x.Funcionario.Nome))
                .ForMember(x => x.Descricao, opt => opt.MapFrom(x => x.Descricao.Length > 300 ? x.Descricao.Substring(0, 300) + "..." : x.Descricao));

            CreateMap<Fornecedor, FornecedorVM>()
                .ForMember(x => x.FuncionariosTerceirizados, opt => opt.MapFrom(x => x.FuncionariosTerceirizados.Where(y => y.Ativo.HasValue && y.Ativo.Value && y.Delete.HasValue && !y.Delete.Value).OrderBy(y => y.Nome)));

        }
    }
}

using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Repository;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;
using System.Collections.Generic;
using System;
using System.Linq;

namespace SGQ.GDOL.Domain.ComercialRoot.Service
{
    public class PermissaoService : IPermissaoService
    {
        private readonly IConfiguracaoClienteRepository _configuracaoClienteRepository;
        private readonly IPermissaoExclusaoRepository _permissaoExclusaoRepository;

        public PermissaoService(IConfiguracaoClienteRepository configuracaoClienteRepository, IPermissaoExclusaoRepository permissaoExclusaoRepository)
        {
            _configuracaoClienteRepository = configuracaoClienteRepository;
            _permissaoExclusaoRepository = permissaoExclusaoRepository;
        }

        public List<Permissao> ObterPermissoes(string cliente)
        {
            var permissoes = new List<Permissao> {
                new Permissao { Title = "Home", Icon = "home", Component = "HomePage", Color = "green" },
                new Permissao { Title = "Baixar Dados", Icon = "cloud-download", Component = "Baixar", Color = "green"},
                new Permissao { Title = "Publicar Alterações", Icon = "cloud-upload", Component = "Subir", Color = "green"},
                new Permissao { Title = "Listar Alterações", Icon = "list", Component = "AlteracoesPage", Color = "orange"},
                new Permissao { Title = "Descartar Alterações", Icon = "trash", Component = "Descartar", Color = "red"}
            };

            var configuracao = _configuracaoClienteRepository.Buscar(x => x.Nome.Equals(cliente, StringComparison.InvariantCultureIgnoreCase)).FirstOrDefault();

            if (configuracao != null)
            {

                if (configuracao.AcessoServicoTreinamento)
                {
                    permissoes.Add(new Permissao { Title = "Treinamentos RH", Icon = "book", Component = "TreinamentoPage", Color = "green" });
                    permissoes.Add(new Permissao { Title = "Treinamentos Terceirizados", Icon = "bookmarks", Component = "TreinamentoTerceiroPage", Color = "orange" });
                }
                if (configuracao.AcessoServicoEntregaObras)
                {
                    permissoes.Add(new Permissao { Title = "Entrega de Obras", Icon = "checkbox", Component = "ObraPage", Color = "green" });
                }
                if (configuracao.AcessoServicoAssistenciaTecnica)
                {
                    permissoes.Add(new Permissao { Title = "Assistência Técnica", Icon = "build", Component = "AssistenciaPage", Color = "green" });
                }
            }
            
            permissoes.Add(new Permissao { Title = "Sair", Icon = "exit", Component = "LoginPage", Color = "red" });

            return permissoes;
        }

        public PermissaoExclusao ObterPermissoesExclusao(string cliente)
        {
            var result = _permissaoExclusaoRepository.ObterPermissoesExclusao(cliente);
            return result;
        }
    }
}

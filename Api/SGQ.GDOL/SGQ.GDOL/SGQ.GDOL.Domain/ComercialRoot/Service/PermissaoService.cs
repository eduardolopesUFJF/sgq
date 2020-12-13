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

        public PermissaoService(IConfiguracaoClienteRepository configuracaoClienteRepository)
        {
            _configuracaoClienteRepository = configuracaoClienteRepository;
        }

        public List<Permissao> ObterPermissoes(string cliente)
        {
            var permissoes = new List<Permissao> {
                new Permissao { Title = "Home", Icon = "home", Component = "HomePage" },
                new Permissao { Title = "Baixar Dados", Icon = "cloud-download", Component = "Baixar"},
                new Permissao { Title = "Listar Alterações", Icon = "list", Component = "AlteracoesPage"},
                new Permissao { Title = "Publicar Alterações", Icon = "cloud-upload", Component = "Subir"},
                new Permissao { Title = "Descartar Alterações", Icon = "trash", Component = "Descartar"}
            };

            var configuracao = _configuracaoClienteRepository.Buscar(x => x.Nome.Equals(cliente, StringComparison.InvariantCultureIgnoreCase)).FirstOrDefault();

            if (configuracao != null)
            {

                if (configuracao.AcessoServicoTreinamento)
                {
                    permissoes.Add(new Permissao { Title = "Treinamentos", Icon = "book", Component = "TreinamentoPage" });
                }
                if (configuracao.AcessoServicoEntregaObras)
                {
                    permissoes.Add(new Permissao { Title = "Entrega de Obras", Icon = "checkbox", Component = "ObraPage" });
                }
                if (configuracao.AcessoServicoAssistenciaTecnica)
                {
                    permissoes.Add(new Permissao { Title = "Assistência Técnica", Icon = "build", Component = "AssistenciaPage" });
                }
            }
            
            permissoes.Add(new Permissao { Title = "Sair", Icon = "exit", Component = "LoginPage" });

            return permissoes;
        }
    }
}

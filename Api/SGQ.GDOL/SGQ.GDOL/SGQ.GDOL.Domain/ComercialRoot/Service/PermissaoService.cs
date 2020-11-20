using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ComercialRoot.Service
{
    public class PermissaoService : IPermissaoService
    {
        public PermissaoService()
        {

        }

        public List<Permissao> ObterPermissoes(string cliente)
        {
            var permissoes = new List<Permissao> {
                new Permissao { Title = "Home", Icon = "home", Component = "HomePage" },
                new Permissao { Title = "Baixar Dados", Icon = "cloud-download", Component = "Baixar"},
                new Permissao { Title = "Listar Alterações", Icon = "list", Component = "AlteracoesPage"},
                new Permissao { Title = "Publicar Alterações", Icon = "cloud-upload", Component = "Subir"},
                new Permissao { Title = "Descartar Alterações", Icon = "trash", Component = "Descartar"},
                new Permissao { Title = "Treinamentos", Icon = "book", Component = "TreinamentoPage"},
                new Permissao { Title = "Entrega de Obras", Icon = "checkbox", Component = "ObraPage"},
                new Permissao { Title = "Assistência Técnica", Icon = "build", Component = "AssistenciaPage"},
                new Permissao { Title = "Sair", Icon = "exit", Component = "LoginPage"}
            };

            return permissoes;
        }
    }
}

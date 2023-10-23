using Microsoft.Extensions.Configuration;
using SGQ.GDOL.Domain;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Repository;
using System.Data.SqlClient;
using System.IO;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class PermissaoExclusaoRepository : IPermissaoExclusaoRepository
    {
        string query = @"select pg.desabilita_exclusao from usuario u
                        inner join usuario_grupo ug on ug.id_usuario = u.id_usuario
                        inner join grupo_acesso ga on ga.id_grupo_acesso = ug.id_grupo_acesso
                        inner join permissao_grupo_tela pg on pg.id_grupo_acesso = ga.id_grupo_acesso
                        inner join tela_sistema t on t.id_tela_sistema = pg.id_tela_sistema
                        where u.login = 'param_login_usuario' and u.[delete] = 0 
                        and ug.[delete] = 0
                        and ga.ativo = 1 and ga.[delete] = 0
                        and pg.[delete] = 0
                        and t.[delete] = 0
                        and t.url = 'param_tela_sistema'";

        public PermissaoExclusao ObterPermissoesExclusao(string cliente)
        {
            string queryBloqueioArea = query.Replace("param_login_usuario", cliente).Replace("param_tela_sistema", "Obras_cadastroarea.aspx");
            string queryBloqueioChecklist = query.Replace("param_login_usuario", cliente).Replace("param_tela_sistema", "Obras_checklistarea.aspx");

            PermissaoExclusao permissaoExclusao = new PermissaoExclusao
            {
                PossuiBloqueioExclusaoArea = PossuiBloqueioExclusao(queryBloqueioArea),
                PossuiBloqueioExclusaoChecklist = PossuiBloqueioExclusao(queryBloqueioChecklist)
            };

            return permissaoExclusao;
        }

        private bool PossuiBloqueioExclusao(string queryBloqueio)
        {
            try
            {
                string connectionString = GetConnectionString();
                bool bloqueioExclusao = false;

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand(queryBloqueio, connection))
                    {
                        connection.Open();
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                if (!reader.IsDBNull(0) && reader.GetBoolean(0))
                                {
                                    bloqueioExclusao = true;
                                }
                            }
                        }
                    }
                }
                return bloqueioExclusao;
            }
            catch (SqlException)
            {
                return false;
            }
        }

        private string GetConnectionString()
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            string connectionString = config.GetConnectionString("DefaultConnection").Replace("schema", CredenciaisBanco.Schema).Replace("usuario", CredenciaisBanco.Usuario).Replace("senha", CredenciaisBanco.Senha);
            return connectionString;
        }
    }
}

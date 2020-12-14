using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.ComercialRoot.DTO;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Enum;
using SGQ.GDOL.Domain.ComercialRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using Microsoft.Extensions.Configuration;
using SGQ.GDOL.Domain;
using FireSharp.Extensions;
using Serilog;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class AcessoClienteRepository : BaseRepository<AcessoCliente>, IAcessoClienteRepository
    {
        public AcessoClienteRepository(ServiceContext serviceContext) : base(serviceContext)
        {

        }

        public void AdicionarDapper(AcessoCliente acessoCliente)
        {
            var connectionString = "Data Source=162.214.76.128,1433;Initial Catalog=schema;persist security info=True;user id=usuario;password=senha;MultipleActiveResultSets=True;";
            connectionString = connectionString.Replace("schema", "BPOSSAS_GDOLSISTEMAS").Replace("usuario", CredenciaisBanco.Usuario).Replace("senha", CredenciaisBanco.Senha);
            using (var con = new SqlConnection(connectionString))
            {
                try
                {
                    con.Open();
                    var query = "INSERT INTO CONFIGURACAO_CLIENTES_ACESSOS (NOME_CLIENTE, ID_APLICATIVO_ACESSADO, ID_FUNCIONALIDADE_ACESSADA, DATA_ACESSO) VALUES (@NomeCliente, @IdAplicativoAcessado, @IdFuncionalidadeAcessada, @DataAcesso)";
                    con.Execute(query, acessoCliente);
                }
                catch (Exception ex)
                {
                    Log.Fatal("Falha ao logar acesso:\n" + acessoCliente.ToJson() + "\nException: " + ex.Message);
                }
                finally
                {
                    con.Close();
                }
            }
        }

        public AcessoClienteDTO ObterAcessos(string cliente, DateTime dtInicio, DateTime dtFim)
        {
            using (var ServiceContext = new ServiceContext())
            {
                var acessos = ServiceContext.AcessoCliente
                        .AsNoTracking()
                        .Where(x => x.NomeCliente.Equals(cliente, StringComparison.InvariantCultureIgnoreCase) && x.DataAcesso.Date >= dtInicio && x.DataAcesso.Date <= dtFim);

                var acessosDTO = new AcessoClienteDTO
                {
                    NomeCliente = cliente,
                    QuantidadeAcessosChecklist = acessos.Count(x => x.IdAplicativoAcessado == (int)EnumAplicativo.CHECKLIST),
                    QuantidadeAcessosServicos = acessos.Count(x => x.IdAplicativoAcessado == (int)EnumAplicativo.SERVICOS),
                    QuantidadeAcessosServicosAssistenciaTecnica = acessos.Count(x => x.IdFuncionalidadeAcessada == (int)EnumFuncionalidadeServicos.ASSISTENCIA_TECNICA),
                    QuantidadeAcessosServicosEntregaObra = acessos.Count(x => x.IdFuncionalidadeAcessada == (int)EnumFuncionalidadeServicos.ENTREGA_OBRA),
                    QuantidadeAcessosServicosTreinamento = acessos.Count(x => x.IdFuncionalidadeAcessada == (int)EnumFuncionalidadeServicos.TREINAMENTO)
                };

                return acessosDTO;
            }
        }
    }
}

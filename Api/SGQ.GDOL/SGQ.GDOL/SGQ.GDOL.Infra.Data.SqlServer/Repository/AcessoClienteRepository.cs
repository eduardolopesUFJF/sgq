using Microsoft.EntityFrameworkCore;
using SGQ.GDOL.Domain.ComercialRoot.DTO;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Enum;
using SGQ.GDOL.Domain.ComercialRoot.Repository;
using SGQ.GDOL.Infra.Data.SqlServer.Context;
using System;
using System.Linq;

namespace SGQ.GDOL.Infra.Data.SqlServer.Repository
{
    public class AcessoClienteRepository : BaseRepository<AcessoCliente>, IAcessoClienteRepository
    {
        public AcessoClienteRepository(ServiceContext serviceContext) : base(serviceContext)
        {

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

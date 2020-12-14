using SGQ.GDOL.Domain.ComercialRoot.DTO;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using System;
using System.Threading.Tasks;

namespace SGQ.GDOL.Domain.ComercialRoot.Repository
{
    public interface IAcessoClienteRepository : IBaseRepository<AcessoCliente>
    {
        AcessoClienteDTO ObterAcessos(string cliente, DateTime dtInicio, DateTime dtFim);
        void AdicionarDapper(AcessoCliente acessoCliente);
    }
}

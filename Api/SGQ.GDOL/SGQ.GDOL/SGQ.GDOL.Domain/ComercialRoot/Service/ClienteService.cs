using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Repository;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Domain.ComercialRoot.Service
{
    public class ClienteService : IClienteService
    {
        private readonly IConfiguracaoClienteRepository _configuracaoClienteRepository;

        public ClienteService(IConfiguracaoClienteRepository configuracaoClienteRepository)
        {
            _configuracaoClienteRepository = configuracaoClienteRepository;
        }

        public List<ConfiguracaoCliente> BuscarTodos(bool appServicos)
        {
            var clientes = _configuracaoClienteRepository.Buscar(x => appServicos ? x.AcessoServico : x.AcessoChecklist).ToList();
            return clientes;
        }
    }
}

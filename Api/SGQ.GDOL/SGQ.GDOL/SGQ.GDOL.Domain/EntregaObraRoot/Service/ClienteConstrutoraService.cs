using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service
{
    public class ClienteConstrutoraService : IClienteConstrutoraService
    {
        private readonly IClienteConstrutoraRepository _clienteConstrutoraRepository;

        public ClienteConstrutoraService(
            IClienteConstrutoraRepository clienteConstrutoraRepository)
        {
            _clienteConstrutoraRepository = clienteConstrutoraRepository;
        }

        public IEnumerable<ClienteConstrutora> BuscarTodosAtivos()
        {
            var result = _clienteConstrutoraRepository.Buscar(x => x.Delete.HasValue && !x.Delete.Value);
            return result;
        }
    }
}

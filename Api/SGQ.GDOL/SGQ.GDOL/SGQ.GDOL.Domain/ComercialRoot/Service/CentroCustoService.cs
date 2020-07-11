using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Repository;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Domain.ComercialRoot.Service
{
    public class CentroCustoService : ICentroCustoService
    {
        private readonly ICentroCustoRepository _centroCustoRepository;

        public CentroCustoService(
            ICentroCustoRepository centroCustoRepository)
        {
            _centroCustoRepository = centroCustoRepository;
        }

        public List<CentroCusto> ObterTodosAtivos()
        {
            var result = _centroCustoRepository.Buscar(x => x.Delete.HasValue && !x.Delete.Value);
            return result.ToList();
        }
    }
}

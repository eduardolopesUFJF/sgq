using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service
{
    public class TermoService : ITermoService
    {
        private readonly ITermoRepository _termoRepository;

        public TermoService(
            ITermoRepository termoRepository)
        {
            _termoRepository = termoRepository;
        }

        public List<Termo> ObterTodosAtivos()
        {
            var result = _termoRepository.Buscar(x => !x.Delete).OrderBy(x => x.Nome);
            return result.ToList();
        }
    }
}

using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using SGQ.GDOL.Domain.TreinamentoRoot.Repository;
using SGQ.GDOL.Domain.TreinamentoRoot.Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Domain.TreinamentoRoot.Service
{
    public class TreinamentoService : ITreinamentoService
    {
        private readonly ITreinamentoRepository _treinamentoRepository;

        public TreinamentoService(ITreinamentoRepository treinamentoRepository)
        {
            _treinamentoRepository = treinamentoRepository;
        }

        public List<Treinamento> ObterTodosAtivos()
        {
            var result = _treinamentoRepository.Buscar(x => x.Ativo.HasValue && x.Ativo.Value).OrderBy(x => x.Nome);
            return result.ToList();
        }
    }
}

using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service
{
    public class ItemChecklistEntregaService : IItemChecklistEntregaService
    {
        private readonly IItemChecklistEntregaRepository _itemChecklistEntregaRepository;

        public ItemChecklistEntregaService(
            IItemChecklistEntregaRepository itemChecklistEntregaRepository)
        {
            _itemChecklistEntregaRepository = itemChecklistEntregaRepository;
        }

        public List<ItemChecklistObra> ObterTodos()
        {
            var result = _itemChecklistEntregaRepository.BuscarTodos();
            return result.ToList();
        }
    }
}

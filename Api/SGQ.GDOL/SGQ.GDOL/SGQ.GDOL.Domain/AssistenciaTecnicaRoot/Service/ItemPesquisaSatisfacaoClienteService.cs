using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service
{
    public class ItemPesquisaSatisfacaoClienteService : IItemPesquisaSatisfacaoClienteService
    {
        private readonly IItemPesquisaSatisfacaoClienteRepository _itemPesquisaSatisfacaoClienteRepository;

        public ItemPesquisaSatisfacaoClienteService(
            IItemPesquisaSatisfacaoClienteRepository itemPesquisaSatisfacaoClienteRepository)
        {
            _itemPesquisaSatisfacaoClienteRepository = itemPesquisaSatisfacaoClienteRepository;
        }

        public void Atualizar(ItemPesquisaSatisfacaoCliente itemPesquisaSatisfacaoCliente)
        {
            _itemPesquisaSatisfacaoClienteRepository.Update(itemPesquisaSatisfacaoCliente);
        }
    }
}

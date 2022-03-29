using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces
{
    public interface IEntregaObraClienteService
    {
        EntregaObraCliente Inserir(EntregaObraCliente entregaObraCliente);
        void Atualizar(EntregaObraCliente entregaObraCliente);
        EntregaObraCliente ObterEntregaObraCliente(int idEntregaObraCliente);
    }
}

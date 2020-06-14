using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces
{
    public interface IEntregaObraClienteService
    {
        void Inserir(EntregaObraCliente entregaObraCliente);
        void Atualizar(EntregaObraCliente entregaObraCliente);
    }
}

using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces
{
    public interface IEntregaObraClienteChecklistService
    {
        void Adicionar(EntregaObraClienteChecklist entregaObraClienteChecklist);
        void Atualizar(EntregaObraClienteChecklist entregaObraClienteChecklist);
        void RemoverAtuais(int entregaObraClienteId);
    }
}

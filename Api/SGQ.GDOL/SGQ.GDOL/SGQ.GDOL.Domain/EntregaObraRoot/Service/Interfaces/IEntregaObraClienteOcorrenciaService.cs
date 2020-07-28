using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces
{
    public interface IEntregaObraClienteOcorrenciaService
    {
        void Adicionar(EntregaObraClienteOcorrencia entregaObraClienteOcorrencia);
        void Atualizar(EntregaObraClienteOcorrencia entregaObraClienteOcorrencia);
    }
}

using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces
{
    public interface IEntregaObraClienteArquivoService
    {
        void Adicionar(EntregaObraClienteArquivo entregaObraClienteArquivo);
        void Atualizar(EntregaObraClienteArquivo entregaObraClienteArquivo);
    }
}

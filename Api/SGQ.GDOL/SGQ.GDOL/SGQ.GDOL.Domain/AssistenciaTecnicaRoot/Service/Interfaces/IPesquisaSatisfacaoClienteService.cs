using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces
{
    public interface IPesquisaSatisfacaoClienteService
    {
        void Adicionar(PesquisaSatisfacaoCliente pesquisaSatisfacaoCliente);
        void Atualizar(PesquisaSatisfacaoCliente pesquisaSatisfacaoCliente);
    }
}

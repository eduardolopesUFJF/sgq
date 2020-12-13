using SGQ.GDOL.Domain.ComercialRoot.Entity;

namespace SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces
{
    public interface IConfiguracaoClienteService
    {
        bool AtualizarConfiguracoes(ConfiguracaoCliente configuracaoCliente);
        bool CriarConfiguracoes(ConfiguracaoCliente configuracaoCliente);
        ConfiguracaoCliente BuscarConfiguracoes(string cliente);
        void Deletar(int idCliente);
    }
}

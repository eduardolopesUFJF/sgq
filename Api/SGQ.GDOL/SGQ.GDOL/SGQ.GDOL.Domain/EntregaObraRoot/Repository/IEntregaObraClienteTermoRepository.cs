using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Repository
{
    public interface IEntregaObraClienteTermoRepository : IBaseRepository<EntregaObraClienteTermo> 
    {
        void RemoverAtuais(int entregaObraClienteId);
    }
}

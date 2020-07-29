using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces
{
    public interface IEntregaObraClienteTermoService
    {
        void AdicionarNovos(ICollection<EntregaObraClienteTermo> entregaObraClienteTermos);
        void RemoverAtuais(int entregaObraClienteId);
    }
}
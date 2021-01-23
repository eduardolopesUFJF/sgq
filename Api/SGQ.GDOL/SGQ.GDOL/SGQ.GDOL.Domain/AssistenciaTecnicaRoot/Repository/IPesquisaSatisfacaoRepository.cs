using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Repository
{
    public interface IPesquisaSatisfacaoRepository : IBaseRepository<PesquisaSatisfacao>
    {
        List<PesquisaSatisfacao> ObterPesquisas();
    }
}

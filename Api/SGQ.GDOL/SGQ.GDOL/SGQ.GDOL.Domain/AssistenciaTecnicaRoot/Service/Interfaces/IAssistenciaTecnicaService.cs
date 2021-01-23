using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces
{
    public interface IAssistenciaTecnicaService
    {
        void Adicionar(AssistenciaTecnica assistenciaTecnica);
        void Atualizar(AssistenciaTecnica assistenciaTecnica);
        List<AssistenciaTecnica> ObterTodosAtivos();
        int ObterUltimoCodigoLivre();
        List<PesquisaSatisfacao> ObterPesquisas();
    }
}

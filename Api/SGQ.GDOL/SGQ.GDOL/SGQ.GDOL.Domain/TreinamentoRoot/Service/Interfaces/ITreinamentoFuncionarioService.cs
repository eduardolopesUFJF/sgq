using SGQ.GDOL.Domain.TreinamentoRoot.DTO;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.TreinamentoRoot.Service.Interface
{
    public interface ITreinamentoFuncionarioService
    {
        List<TreinamentoFuncionarioAgrupadoDTO> ObterTodosAtivos();
    }
}

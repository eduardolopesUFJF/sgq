using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.TreinamentoRoot.Service.Interfaces
{
    public interface ITreinamentoService
    {
        List<Treinamento> ObterTodosAtivos();
    }
}

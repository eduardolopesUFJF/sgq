using SGQ.GDOL.Domain.RHRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.RHRoot.Service.Interface
{
    public interface IFuncionarioService
    {
        List<Funcionario> ObterTodosAtivos();
    }
}

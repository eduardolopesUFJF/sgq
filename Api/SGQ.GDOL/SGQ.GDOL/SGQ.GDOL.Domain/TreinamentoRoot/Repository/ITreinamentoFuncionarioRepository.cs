using SGQ.GDOL.Domain.TreinamentoRoot.DTO;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Repository;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Domain.TreinamentoRoot.Repository
{
    public interface ITreinamentoFuncionarioRepository : IBaseRepository<TreinamentoFuncionario>
    {
        List<TreinamentoFuncionarioAgrupadoDTO> ObterTodosAtivos();
    }
}

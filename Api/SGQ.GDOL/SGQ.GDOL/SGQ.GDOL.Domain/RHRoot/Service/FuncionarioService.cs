using System.Collections.Generic;
using System.Linq;
using SGQ.GDOL.Domain.RHRoot.Entity;
using SGQ.GDOL.Domain.RHRoot.Repository;
using SGQ.GDOL.Domain.RHRoot.Service.Interface;

namespace SGQ.GDOL.Domain.RHRoot.Service
{
    public class FuncionarioService : IFuncionarioService
    {
        private readonly IFuncionarioRepository _funcionarioRepository;

        public FuncionarioService(IFuncionarioRepository funcionarioRepository)
        {
            _funcionarioRepository = funcionarioRepository;
        }

        public List<Funcionario> ObterTodosAtivos()
        {
            var result = _funcionarioRepository.Buscar(x => x.Delete.HasValue && !x.Delete.Value).OrderBy(x => x.Nome);
            return result.ToList();
        }
    }
}

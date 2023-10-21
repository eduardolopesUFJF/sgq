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
        private readonly IFuncionarioTerceirizadoRepository _funcionarioTerceirizadoRepository;

        public FuncionarioService(IFuncionarioRepository funcionarioRepository, IFuncionarioTerceirizadoRepository funcionarioTerceirizadoRepository)
        {
            _funcionarioRepository = funcionarioRepository;
            _funcionarioTerceirizadoRepository = funcionarioTerceirizadoRepository;
        }

        public List<Funcionario> ObterTodosAtivos()
        {
            var result = _funcionarioRepository.Buscar(x => x.Delete.HasValue && !x.Delete.Value && x.Demitido == 0).OrderBy(x => x.Nome);
            return result.ToList();
        }

        public List<FuncionarioTerceirizado> ObterTodosTerceirosAtivos()
        {
            var result = _funcionarioTerceirizadoRepository.Buscar(x => x.Delete.HasValue && !x.Delete.Value && x.Ativo.HasValue && x.Ativo.Value).OrderBy(x => x.Nome);
            return result.ToList();
        }
    }
}

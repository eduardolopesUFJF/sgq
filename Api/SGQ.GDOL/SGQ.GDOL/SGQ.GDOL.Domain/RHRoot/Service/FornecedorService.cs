using SGQ.GDOL.Domain.RHRoot.Entity;
using SGQ.GDOL.Domain.RHRoot.Repository;
using SGQ.GDOL.Domain.RHRoot.Service.Interface;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.RHRoot.Service
{
    public class FornecedorService : IFornecedorService
    {
        private readonly IFornecedorRepository _fornecedorRepository;

        public FornecedorService(
            IFornecedorRepository fornecedorRepository)
        {
            _fornecedorRepository = fornecedorRepository;
        }

        public List<Fornecedor> ObterTodosAtivos()
        {
            var result = _fornecedorRepository.ObterTodosAtivos();
            return result;
        }
    }
}

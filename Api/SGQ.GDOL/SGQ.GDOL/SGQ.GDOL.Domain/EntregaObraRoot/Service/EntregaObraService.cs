using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service
{
    public class EntregaObraService : IEntregaObraService
    {
        private readonly IEntregaObraRepository _entregaObraRepository;
        private readonly IUnitOfWork _unitOfWork;

        public EntregaObraService(
            IEntregaObraRepository entregaObraRepository,
            IUnitOfWork unitOfWork)
        {
            _entregaObraRepository = entregaObraRepository;
            _unitOfWork = unitOfWork;
        }

        public EntregaObra ObterComInclude(EntregaObra obra)
        {
            var result = _entregaObraRepository.ObterComInclude(obra);
            return result;
        }

        public List<EntregaObra> ObterTodasAtivasSemInclude(string usuario)
        {
            var result = _entregaObraRepository.ObterTodasAtivasSemInclude(usuario).ToList();
            return result;
        }

        public void Atualizar(EntregaObra entregaObra)
        {
            _entregaObraRepository.Update(entregaObra);
            _unitOfWork.Commit();
        }
    }
}

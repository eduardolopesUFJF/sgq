using System.Collections.Generic;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.ObraRoot.Service
{
    public class ServicoService : IServicoService
    {
        private readonly IServicoRepository _servicoRepository;
        private readonly IUnitOfWork _unitOfWork;

        public ServicoService(
            IServicoRepository servicoRepository,
            IUnitOfWork unitOfWork)
        {
            _servicoRepository = servicoRepository;
            _unitOfWork = unitOfWork;
        }

        public void Atualizar(Servico servico)
        {
            _servicoRepository.Update(servico);
            _unitOfWork.Commit();
        }

        public List<Servico> ObterServicosPorArea(int areaId)
        {
            var servicos = _servicoRepository.ObterAtivosComInclude(areaId);
            return servicos;
        }
    }
}

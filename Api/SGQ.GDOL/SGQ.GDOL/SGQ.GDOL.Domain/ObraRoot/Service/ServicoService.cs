using System.Collections.Generic;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.ObraRoot.Service
{
    public class ServicoService : IServicoService
    {
        private readonly IServicoRepository _servicoRepository;

        public ServicoService(IServicoRepository servicoRepository)
        {
            _servicoRepository = servicoRepository;
        }

        public List<Servico> ObterServicosPorArea(int areaId)
        {
            var servicos = _servicoRepository.ObterAtivosComInclude(areaId);
            return servicos;
        }
    }
}

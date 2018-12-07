using SGQ.GDOL.Domain.ObraRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Service.Interfaces
{
    public interface IServicoService
    {
        List<Servico> ObterServicosPorArea(int areaId);
        void Atualizar(Servico servico);
    }
}

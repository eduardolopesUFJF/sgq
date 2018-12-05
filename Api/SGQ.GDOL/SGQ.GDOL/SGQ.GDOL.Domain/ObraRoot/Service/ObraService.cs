using System.Collections.Generic;
using System.Linq;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.ObraRoot.Service
{
    public class ObraService : IObraService
    {
        private readonly IObraRepository _obraRepository;

        public ObraService(IObraRepository obraRepository)
        {
            _obraRepository = obraRepository;
        }

        public List<Obra> ObterTodasAtivasCompletas()
        {
            var result = _obraRepository.ObterTodasAtivasCompletas().ToList();
            return result;
        }
    }
}

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

        public Obra ObterObraComInclude(Obra obra)
        {
            var result = _obraRepository.ObterObraComInclude(obra);
            return result;
        }

        public List<Obra> ObterTodasAtivasSemInclude(string usuario)
        {
            var result = _obraRepository.ObterTodasAtivasSemInclude(usuario).ToList();
            return result;
        }
    }
}

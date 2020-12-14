using SGQ.GDOL.Domain.ComercialRoot.DTO;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Enum;
using SGQ.GDOL.Domain.ComercialRoot.Repository;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace SGQ.GDOL.Domain.ComercialRoot.Service
{
    public class AcessoClienteService : IAcessoClienteService
    {
        private readonly IAcessoClienteRepository _acessoClienteRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AcessoClienteService(
            IAcessoClienteRepository acessoClienteRepository,
            IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _acessoClienteRepository = acessoClienteRepository;
        }

        public AcessoClienteDTO ObterAcessos(string cliente, DateTime dtInicio, DateTime dtFim)
        {
            var result = _acessoClienteRepository.ObterAcessos(cliente, dtInicio, dtFim);
            return result;
        }

        public void Registrar(EnumAplicativo enumAplicativo, EnumFuncionalidadeServicos? enumFuncionalidadeServicos)
        {
            var acessoCliente = new AcessoCliente
            {
                NomeCliente = CredenciaisBanco.Cliente,
                IdAplicativoAcessado = (int) enumAplicativo,
                IdFuncionalidadeAcessada = (int?) enumFuncionalidadeServicos,
                DataAcesso = DateTime.UtcNow
            };

            Task.Run(() => _acessoClienteRepository.AdicionarDapper(acessoCliente));
        }
    }
}

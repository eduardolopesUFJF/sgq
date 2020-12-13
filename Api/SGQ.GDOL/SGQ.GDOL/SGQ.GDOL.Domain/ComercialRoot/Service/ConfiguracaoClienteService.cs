using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Repository;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;
using System;
using System.Linq;

namespace SGQ.GDOL.Domain.ComercialRoot.Service
{
    public class ConfiguracaoClienteService : IConfiguracaoClienteService
    {
        private readonly IConfiguracaoClienteRepository _configuracaoClienteRepository;
        private readonly IUnitOfWork _unitOfWork;

        public ConfiguracaoClienteService(
            IConfiguracaoClienteRepository configuracaoClienteRepository,
            IUnitOfWork unitOfWork)
        {
            _configuracaoClienteRepository = configuracaoClienteRepository;
            _unitOfWork = unitOfWork;
        }

        public bool AtualizarConfiguracoes(ConfiguracaoCliente configuracaoCliente)
        {
            var atual = _configuracaoClienteRepository.Buscar(x => x.Nome.Equals(configuracaoCliente.Nome, StringComparison.InvariantCultureIgnoreCase)).FirstOrDefault();
            if (atual != null && configuracaoCliente.Id == 202122)
            {
                atual.AcessoChecklist = configuracaoCliente.AcessoChecklist;
                atual.AcessoServico = configuracaoCliente.AcessoServico;
                atual.AcessoServicoAssistenciaTecnica = configuracaoCliente.AcessoServicoAssistenciaTecnica;
                atual.AcessoServicoEntregaObras = configuracaoCliente.AcessoServicoEntregaObras;
                atual.AcessoServicoTreinamento = configuracaoCliente.AcessoServicoTreinamento;

                _configuracaoClienteRepository.Update(atual);
                _unitOfWork.Commit();
                return true;
            }
            return false;
        }

        public ConfiguracaoCliente BuscarConfiguracoes(string cliente)
        {
            var atual = _configuracaoClienteRepository.Buscar(x => x.Nome.Equals(cliente, StringComparison.InvariantCultureIgnoreCase)).FirstOrDefault();
            return atual;
        }

        public bool CriarConfiguracoes(ConfiguracaoCliente configuracaoCliente)
        {
            if (configuracaoCliente.Id == 03119290)
            {
                configuracaoCliente.Id = 0;
                _configuracaoClienteRepository.Adicionar(configuracaoCliente);
                _unitOfWork.Commit();
                return true;
            }
            return false;
        }

        public void Deletar(int idCliente)
        {
            var atual = _configuracaoClienteRepository.Buscar(x => x.Id == idCliente).FirstOrDefault();
            if (atual != null)
            {
                _configuracaoClienteRepository.Delete(atual);
                _unitOfWork.Commit();
            }
        }
    }
}

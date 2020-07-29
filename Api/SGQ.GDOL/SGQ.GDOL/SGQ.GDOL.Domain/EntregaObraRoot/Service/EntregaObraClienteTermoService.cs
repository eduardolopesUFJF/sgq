using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Repository;
using SGQ.GDOL.Domain.EntregaObraRoot.Service.Interfaces;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Service
{
    public class EntregaObraClienteTermoService : IEntregaObraClienteTermoService
    {
        private readonly IEntregaObraClienteTermoRepository _entregaObraClienteTermoRepository;

        public EntregaObraClienteTermoService(
            IEntregaObraClienteTermoRepository entregaObraClienteTermoRepository)
        {
            _entregaObraClienteTermoRepository = entregaObraClienteTermoRepository;
        }

        public void AdicionarNovos(ICollection<EntregaObraClienteTermo> entregaObraClienteTermos)
        {
            foreach (var item in entregaObraClienteTermos)
            {
                _entregaObraClienteTermoRepository.Adicionar(item);
            }
        }

        public void RemoverAtuais(int entregaObraClienteId)
        {
            _entregaObraClienteTermoRepository.RemoverAtuais(entregaObraClienteId);
        }
    }
}

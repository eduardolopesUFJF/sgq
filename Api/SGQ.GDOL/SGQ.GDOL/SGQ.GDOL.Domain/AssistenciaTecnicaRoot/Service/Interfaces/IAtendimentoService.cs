using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces
{
    public interface IAtendimentoService
    {
        void Adicionar(Atendimento assistenciaTecnica);
        void Atualizar(Atendimento assistenciaTecnica);
    }
}

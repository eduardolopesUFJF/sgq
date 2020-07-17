using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;

namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Service.Interfaces
{
    public interface IAssistenciaTecnicaArquivoService
    {
        void Adicionar(AssistenciaTecnicaArquivo assistenciaTecnicaArquivo);
        void Atualizar(AssistenciaTecnicaArquivo assistenciaTecnicaArquivo);
    }
}

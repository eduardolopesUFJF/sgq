using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Domain.ObraRoot.Service.Interfaces
{
    public interface IOcorrenciaService
    {
        void Adicionar(Ocorrencia ocorrencia);
        void Atualizar(Ocorrencia ocorrencia);
    }
}

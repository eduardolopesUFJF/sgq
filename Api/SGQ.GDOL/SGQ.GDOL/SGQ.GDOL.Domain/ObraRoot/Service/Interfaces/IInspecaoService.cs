using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Domain.ObraRoot.Service.Interfaces
{
    public interface IInspecaoService
    {
        int Adicionar(InspecaoObra inspecao);
        void Atualizar(InspecaoObra inspecao);
    }
}

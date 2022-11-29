using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Domain.ObraRoot.Service.Interfaces
{
    public interface IInspecaoObraItemService
    {
        void Atualizar(InspecaoObraItem item);
        int BuscarId(int idNovaInspecao, string descricaoItem);
    }
}

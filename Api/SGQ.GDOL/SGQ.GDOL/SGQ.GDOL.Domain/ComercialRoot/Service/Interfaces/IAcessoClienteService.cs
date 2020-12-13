using SGQ.GDOL.Domain.ComercialRoot.DTO;
using SGQ.GDOL.Domain.ComercialRoot.Enum;
using System;

namespace SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces
{
    public interface IAcessoClienteService
    {
        void Registrar(EnumAplicativo enumAplicativo, EnumFuncionalidadeServicos? enumFuncionalidadeServicos);
        AcessoClienteDTO ObterAcessos(string cliente, DateTime dtInicio, DateTime dtFim);
    }
}

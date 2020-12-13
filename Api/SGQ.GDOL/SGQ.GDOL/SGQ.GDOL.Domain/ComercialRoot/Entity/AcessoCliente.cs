using System;

namespace SGQ.GDOL.Domain.ComercialRoot.Entity
{
    public class AcessoCliente : EntityBase
    {
        public string NomeCliente { get; set; }
        public int IdAplicativoAcessado { get; set; }
        public int? IdFuncionalidadeAcessada { get; set; }
        public DateTime DataAcesso { get; set; }
    }
}

using SGQ.GDOL.Domain.ComercialRoot.Entity;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Entity
{
    public class ClienteCentroCusto : EntityBase
    {
        public int IdCliente { get; set; }
        public virtual ClienteConstrutora Cliente { get; set; }
        public int IdCentroCusto { get; set; }
        public virtual CentroCusto CentroCusto { get; set; }
        public string Unidade { get; set; }
        public bool Principal { get; set; }
        public bool Delete { get; set; }
    }
}

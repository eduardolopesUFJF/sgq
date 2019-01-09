using SGQ.GDOL.Domain.ComercialRoot.Entity;

namespace SGQ.GDOL.Domain.UsuarioRoot.Entity
{
    public class UsuarioCentroCusto : EntityBase
    {
        public int IdUsuario { get; set; }
        public int IdCentroCusto { get; set; }
        public bool Delete { get; set; }

        public virtual Usuario Usuario { get; set; }
        public virtual CentroCusto CentroCusto { get; set; }
    }
}

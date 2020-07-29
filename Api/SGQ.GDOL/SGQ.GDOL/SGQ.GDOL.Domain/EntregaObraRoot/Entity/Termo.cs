using System.Collections.Generic;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Entity
{
    public class Termo : EntityBase
    {
        public string Nome { get; set; }
        public bool Delete { get; set; }
        public ICollection<EntregaObraClienteTermo> EntregasObrasClientes { get; set; }
    }
}

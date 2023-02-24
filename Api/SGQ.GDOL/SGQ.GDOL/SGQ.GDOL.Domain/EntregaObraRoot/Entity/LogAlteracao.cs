using System;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Entity
{
    public class LogAlteracao : EntityBase
    {
        public int IdTabela { get; set; }
        public int TipoTabela { get; set; }
        public int IdUsuario { get; set; }
        public string LoginUsuario { get; set; }
        public DateTime DataHora { get; set; }
        public int TipoAcao { get; set; }
    }
}
using System;

namespace SGQ.GDOL.Domain.EntregaObraRoot.Entity
{
    public class EntregaObraClienteOcorrencia : EntityBase
    {
        public int IdEntregaObraCliente { get; set; }
        public DateTime? DataDescricao { get; set; }
        public DateTime? DataTratativa { get; set; }
        public string Descricao { get; set; }
        public string Tratativa { get; set; }
        public bool Delete { get; set; }
        public DateTime? DataHoraInclusao { get; set; }
        public DateTime? DataHoraAlteracao { get; set; }

        public virtual EntregaObraCliente EntregaObraCliente { get; set; }
    }
}

using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class EntregaObraVM
    {
        public int Id { get; set; }
        public int? IdCentroCusto { get; set; }
        public string Descricao { get; set; }
        public string Situacao { get; set; }
        public int Status { get; set; }
        public bool Delete { get; set; }

        public List<EntregaObraClienteVM> EntregasObrasClientes { get; set; }
    }
}

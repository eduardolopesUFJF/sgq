using System.Collections.Generic;

namespace SGQ.GDOL.Api.ViewModels
{
    public class ObraVM
    {
        public int Id { get; set; }
        public int? IdCentroCusto { get; set; }
        public string Descricao { get; set; }
        public string Situacao { get; set; }

        public List<AreaVM> Areas { get; set; }
    }
}

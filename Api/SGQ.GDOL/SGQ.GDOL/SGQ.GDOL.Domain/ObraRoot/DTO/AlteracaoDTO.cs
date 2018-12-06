using System;

namespace SGQ.GDOL.Domain.ObraRoot.DTO
{
    public class AlteracaoDTO
    {
        public string Id { get; set; }
        public int ObraId { get; set; }
        public string Tipo { get; set; }
        public string Entidade { get; set; }
        public DateTime Data { get; set; }
        public string Descricao { get; set; }

        public string Valor { get; set; }
    }
}

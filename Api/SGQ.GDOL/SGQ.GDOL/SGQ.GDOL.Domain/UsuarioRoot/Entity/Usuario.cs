using System;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.UsuarioRoot.Entity
{
    public class Usuario : EntityBase
    {
        public string Nome { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
        public string Matricula { get; set; }
        public int? Tipo { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public DateTime? DataCadastro { get; set; }
        public DateTime? DataBloqueio { get; set; }
        public bool? Bloqueado { get; set; }
        public bool? CentroCustoRestrito { get; set; }
        public bool? Delete { get; set; }

        public virtual ICollection<UsuarioCentroCusto> CentrosCusto { get; set; }
    }
}

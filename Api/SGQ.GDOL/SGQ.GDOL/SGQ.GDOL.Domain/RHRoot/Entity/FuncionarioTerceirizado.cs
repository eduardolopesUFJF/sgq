﻿using SGQ.GDOL.Domain.ObraRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.RHRoot.Entity
{
    public class FuncionarioTerceirizado : EntityBase
    {
        public int IdFornecedor { get; set; }
        public string Nome { get; set; }
        public bool? Delete { get; set; }
        public bool? Ativo { get; set; }

        public virtual Fornecedor Fornecedor { get; set; }
        public ICollection<RealizadoPorFuncionario> RealizadosPorFuncionarios { get; set; }
    }
}

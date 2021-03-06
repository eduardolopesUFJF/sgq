﻿using SGQ.GDOL.Domain.ObraRoot.Entity;
using System.Collections.Generic;

namespace SGQ.GDOL.Domain.ObraRoot.Service.Interfaces
{
    public interface IObraService
    {
        List<Obra> ObterTodasAtivasSemInclude(string usuario);
        Obra ObterObraComInclude(Obra obra);
    }
}

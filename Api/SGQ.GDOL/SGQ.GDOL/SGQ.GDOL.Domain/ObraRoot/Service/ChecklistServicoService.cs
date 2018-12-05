﻿using System.Collections.Generic;
using System.Linq;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.ObraRoot.Service
{
    public class ChecklistServicoService : IChecklistServicoService
    {
        private readonly IChecklistServicoRepository _checklistServicoRepository;

        public ChecklistServicoService(IChecklistServicoRepository checklistServicoRepository)
        {
            _checklistServicoRepository = checklistServicoRepository;
        }

        public List<ChecklistServico> ObterTodosAtivos()
        {
            var result = _checklistServicoRepository.Buscar(x => x.Ativo.HasValue && x.Ativo.Value);
            return result.ToList();
        }
    }
}

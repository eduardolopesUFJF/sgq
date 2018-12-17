﻿using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Repository;
using SGQ.GDOL.Domain.ObraRoot.Service.Interfaces;

namespace SGQ.GDOL.Domain.ObraRoot.Service
{
    public class InspecaoService : IInspecaoService
    {
        private readonly IInspecaoRepository _inspecaoRepository;
        private readonly IUnitOfWork _unitOfWork;

        public InspecaoService(
            IInspecaoRepository inspecaoRepository,
            IUnitOfWork unitOfWork
            )
        {
            _inspecaoRepository = inspecaoRepository;
            _unitOfWork = unitOfWork;
        }

        public void Adicionar(InspecaoObra inspecao)
        {
            _inspecaoRepository.Adicionar(inspecao);
            _unitOfWork.Commit();
        }

        public void Atualizar(InspecaoObra inspecao)
        {
            if (inspecao.Id != 0)
            {
                _inspecaoRepository.Update(inspecao);
                _unitOfWork.Commit();
            }
        }
    }
}

﻿using AutoMapper;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using SGQ.GDOL.Api.ViewModels;
using SGQ.GDOL.Domain.UsuarioRoot.DTO;
using SGQ.GDOL.Domain.UsuarioRoot.Service.Interface;
using System;
using System.IO;
using System.Linq;
using System.Text;

namespace SGQ.GDOL.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Usuario")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioService _usuarioService;

        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpPost("logar")]
        public IActionResult Post([FromBody] UsuarioLoginVM usuarioLoginVM)
        {
            var usuarioLoginDTO = Mapper.Map<UsuarioLoginDTO>(usuarioLoginVM);
            var result = _usuarioService.Logar(usuarioLoginDTO);
            return Ok(result);
        }
    }
}

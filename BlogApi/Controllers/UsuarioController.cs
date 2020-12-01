using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlogApi.Models.Response;
using BlogApi.Models.ViewModels;
using BlogApi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace BlogApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]   
    public class UsuarioController : ControllerBase
    {
        private IUserService _userService;

        public UsuarioController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpPost("login")]
        public IActionResult Autentificar([FromBody] AuthViewModel model)
        {
            Response response = new Response();
            var userResponse = _userService.Auth(model);
            if (userResponse == null)
            {
                response.Status = StatusResponse.Error;
                response.Message = "Usuario o contraseña incorrecta";
                return BadRequest(response);
            }
            response.Status = StatusResponse.Success;            
            response.Data = userResponse;
            
            return Ok(response);

        }

    }
}

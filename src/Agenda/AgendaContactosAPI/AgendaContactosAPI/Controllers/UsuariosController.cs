using AgendaContactosAPI.Data;
using AgendaContactosAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace AgendaContactosAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly AgendaContactosContext _context;

        public UsuariosController(AgendaContactosContext context)
        {
            _context = context;
        }

        [HttpPost("registrar")]
        public IActionResult Registrar(Usuario usuario)
        {

            usuario.Correo = usuario.Correo.Trim();
            usuario.Cedula = usuario.Cedula.Trim();

            var existeCedula = _context.Usuarios
    .FirstOrDefault(u => u.Cedula == usuario.Cedula);

            if (existeCedula != null)
            {
                return BadRequest(new
                {
                    mensaje = "La cédula ya está registrada"
                });
            }

            var existeCorreo = _context.Usuarios
    .FirstOrDefault(u => u.Correo.ToLower() == usuario.Correo.ToLower());

            if (existeCorreo != null)
            {
                return BadRequest(new
                {
                    mensaje = "El correo ya está registrado"
                });
            }

            usuario.IntentosFallidos = 0;
            usuario.Bloqueado = false;

            _context.Usuarios.Add(usuario);
            _context.SaveChanges();

            return Ok(new
            {
                mensaje = "Usuario registrado correctamente"
            });
        }

        [HttpPost("login")]
        public IActionResult Login(Usuario usuario)
        {

            Console.WriteLine("=== LOGIN ===");
            Console.WriteLine("CEDULA RECIBIDA: [" + usuario.Cedula + "]");
            Console.WriteLine("CLAVE RECIBIDA: [" + usuario.Contrasena + "]");

            var usuarioEncontrado = _context.Usuarios
                .FirstOrDefault(u => u.Cedula == usuario.Cedula);

            if (usuarioEncontrado == null)
            {
                return Unauthorized(new
                {
                    mensaje = "Usuario no encontrado"
                });
            }

            if (usuarioEncontrado.Bloqueado)
            {
                return Unauthorized(new
                {
                    mensaje = "Su usuario ha sido bloqueado. Recupere su contraseña."
                });
            }

            if (usuarioEncontrado.Contrasena != usuario.Contrasena)
            {
                usuarioEncontrado.IntentosFallidos++;

                if (usuarioEncontrado.IntentosFallidos >= 3)
                {
                    usuarioEncontrado.Bloqueado = true;
                }

                _context.SaveChanges();

                return Unauthorized(new
                {
                    mensaje = "Contraseña incorrecta",
                    intentos = usuarioEncontrado.IntentosFallidos
                });
            }

            usuarioEncontrado.IntentosFallidos = 0;

            _context.SaveChanges();

            return Ok(usuarioEncontrado);
        }

        [HttpPost("recuperar")]
        public IActionResult Recuperar(Usuario usuario)
        {
            var usuarioEncontrado = _context.Usuarios
                .FirstOrDefault(u => u.Cedula == usuario.Cedula);

            if (usuarioEncontrado == null)
            {
                return NotFound(new
                {
                    mensaje = "Usuario no encontrado"
                });
            }

            usuarioEncontrado.Contrasena = usuario.Contrasena;

            usuarioEncontrado.IntentosFallidos = 0;

            usuarioEncontrado.Bloqueado = false;

            _context.SaveChanges();

            return Ok(new
            {
                mensaje = "Contraseña actualizada correctamente"
            });
        }
    }
}
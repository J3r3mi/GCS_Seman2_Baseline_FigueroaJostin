using AgendaContactosAPI.Data;
using AgendaContactosAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace AgendaContactosAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactosController : ControllerBase
    {
        private readonly AgendaContactosContext _context;

        public ContactosController(AgendaContactosContext context)
        {
            _context = context;
        }

        [HttpPost("agregar")]
        public IActionResult Agregar(Contacto contacto)
        {
            _context.Contactos.Add(contacto);
            _context.SaveChanges();

            return Ok(new
            {
                mensaje = "Contacto agregado correctamente"
            });
        }

        [HttpGet("listar/{idUsuario}")]
        public IActionResult Listar(int idUsuario)
        {
            var contactos = _context.Contactos
                .Where(c => c.IdUsuario == idUsuario)
                .ToList();

            return Ok(contactos);
        }

        [HttpPut("editar/{id}")]
        public IActionResult Editar(int id, Contacto contacto)
        {
            var contactoActual = _context.Contactos.Find(id);

            if (contactoActual == null)
            {
                return NotFound();
            }

            contactoActual.Nombre = contacto.Nombre;
            contactoActual.Telefono = contacto.Telefono;
            contactoActual.Correo = contacto.Correo;

            _context.SaveChanges();

            return Ok(new
            {
                mensaje = "Contacto actualizado correctamente"
            });
        }

        [HttpDelete("eliminar/{id}")]
        public IActionResult Eliminar(int id)
        {
            var contacto = _context.Contactos.Find(id);

            if (contacto == null)
            {
                return NotFound();
            }

            _context.Contactos.Remove(contacto);
            _context.SaveChanges();

            return Ok(new
            {
                mensaje = "Contacto eliminado correctamente"
            });
        }
    }
}

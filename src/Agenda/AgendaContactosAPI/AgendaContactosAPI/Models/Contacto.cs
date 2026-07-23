using System.ComponentModel.DataAnnotations;

namespace AgendaContactosAPI.Models
{
    public class Contacto
    {
        [Key]
        public int IdContacto { get; set; }

        public string Nombre { get; set; } = string.Empty;

        public string Telefono { get; set; } = string.Empty;

        public string Correo { get; set; } = string.Empty;

        public int IdUsuario { get; set; }
    }
}

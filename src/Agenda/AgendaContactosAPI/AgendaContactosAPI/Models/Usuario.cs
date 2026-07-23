using System.ComponentModel.DataAnnotations;

namespace AgendaContactosAPI.Models
{
    public class Usuario
    {
        [Key]
        public int IdUsuario { get; set; }

        public string Nombre { get; set; } = string.Empty;

        public string Cedula { get; set; } = string.Empty;

        public string Correo { get; set; } = string.Empty;

        public string Contrasena { get; set; } = string.Empty;

        public int IntentosFallidos { get; set; }

        public bool Bloqueado { get; set; }
    }
}
using Microsoft.EntityFrameworkCore;
using AgendaContactosAPI.Models;

namespace AgendaContactosAPI.Data
{
    public class AgendaContactosContext : DbContext
    {
        public AgendaContactosContext(DbContextOptions<AgendaContactosContext> options)
            : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Contacto> Contactos { get; set; }
    }
}
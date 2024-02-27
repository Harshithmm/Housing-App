using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class DataContext(DbContextOptions<DataContext> options):DbContext(options)
    {
        public DbSet<City> Cities { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
using SchoolFaq.Core.Models;

namespace SchoolFaq.Core.Data
{
    public class FaqContext : DbContext
    {
        public FaqContext(DbContextOptions<FaqContext> options)
            : base(options)
        {
        }

        public DbSet<FaqQuestion> FaqQuestions { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
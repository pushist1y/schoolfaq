using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SchoolFaq.Core.Data;
using SchoolFaq.Core.Models;

namespace SchoolFaq.Core.Services
{
    public class DataInitializer
    {
        private readonly FaqContext _context;

        public DataInitializer(FaqContext context)
        {
            _context = context;
        }

        public async Task Initialize()
        {
            var categories = new List<Category>{
                new Category {Name = "Питание"},
                new Category {Name = "Электронный журнал"},
                new Category {Name = "Учебный процесс"},
                new Category {Name = "Предложения и пожелания"},
                new Category {Name = "Иное"},
            };

            var existingCategories = await _context.Categories.ToListAsync();

            var deleting = existingCategories.Where(ex => !categories.Select(c => c.Name).Contains(ex.Name)).ToList();

            var adding = categories.Where(c => !existingCategories.Select(ex => ex.Name).Contains(c.Name)).ToList();

            _context.Categories.RemoveRange(deleting);
            await _context.Categories.AddRangeAsync(adding);
            await _context.SaveChangesAsync();
        }
    }
}
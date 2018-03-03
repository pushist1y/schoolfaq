using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolFaq.Core.Data;

namespace SchoolFaq.Core.Controllers
{
    [Route("api/cat")]
    public class CategoriesController: Controller
    {
        private readonly FaqContext _context;

        public CategoriesController(FaqContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var cs = await _context.Categories.OrderBy(c => c.Name).ToListAsync();
            return Json(cs);
        }
    }
}
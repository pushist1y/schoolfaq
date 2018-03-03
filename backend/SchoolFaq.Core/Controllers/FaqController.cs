using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolFaq.Core.Data;
using SchoolFaq.Core.Models;

namespace SchoolFaq.Core.Controllers
{
    [Route("api/faq")]
    public class FaqController : Controller
    {
        private readonly FaqContext _context;

        public FaqController(FaqContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var qs = await _context.FaqQuestions.OrderByDescending(q => q.Id).ToListAsync();
            return Json(qs);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] FaqQuestion question)
        {
            await _context.FaqQuestions.AddAsync(question);
            await _context.SaveChangesAsync();
            return Json(question);
        }
    }
}
using System;
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
        public async Task<IActionResult> Index([FromQuery] string order)
        {
            var query = _context.FaqQuestions
                .Include(q => q.Category)
                .AsNoTracking();

            var ordered = false;
            if (!string.IsNullOrEmpty(order))
            {
                if (order == "rating")
                {
                    query = query.OrderByDescending(q => q.LikesCount - q.DislikesCount);
                    ordered = true;
                }
            }

            if (!ordered)
            {
                query = query.OrderByDescending(q => q.CreatedAt);
            }

            var qs = await query.ToListAsync();

            return Json(qs);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] FaqQuestion question)
        {
            question.CreatedAt = DateTime.Now;
            await _context.FaqQuestions.AddAsync(question);
            await _context.SaveChangesAsync();
            return Json(question);
        }

        [HttpPost("upvote/{id}")]
        public async Task<IActionResult> Upvote(long id)
        {
            var question = await _context.FaqQuestions.SingleOrDefaultAsync(q => q.Id == id);
            question.LikesCount += 1;
            await _context.SaveChangesAsync();
            return Json(question);
        }

        [HttpPost("downvote/{id}")]
        public async Task<IActionResult> Downvote(long id)
        {
            var question = await _context.FaqQuestions.SingleOrDefaultAsync(q => q.Id == id);
            question.DislikesCount += 1;
            await _context.SaveChangesAsync();
            return Json(question);
        }

        [HttpPost("answer/{id}")]
        public async Task<IActionResult> Answer(long id, [FromBody] FaqQuestion answeredQuestion)
        {
            if (answeredQuestion == null)
            {
                return BadRequest();
            }

            var question = await _context.FaqQuestions.SingleOrDefaultAsync(q => q.Id == id);
            question.Answer = answeredQuestion.Answer;
            question.AnswererName = answeredQuestion.AnswererName;
            question.AnswerDate = DateTime.Now;
            await _context.SaveChangesAsync();
            return Json(question);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            var question = new FaqQuestion{Id = id};
            _context.FaqQuestions.Attach(question);
            _context.Entry(question).State = EntityState.Deleted;
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
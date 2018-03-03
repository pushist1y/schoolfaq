using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolFaq.Core.Models
{
    public class FaqQuestion
    {
        public long Id { get; set; }
        public string Subject { get; set; }
        public string Text { get; set; }
        public int LikesCount { get; set; }
        public int DislikesCount { get; set; }
        public string QuestionerName { get; set; }
        public string QuestionerPhone { get; set; }
        public long CategoryId { get; set; }

        [ForeignKey("CategoryId")]
        public Category Category { get; set; }
        public DateTime? CreatedAt { get; set; }
    }
}
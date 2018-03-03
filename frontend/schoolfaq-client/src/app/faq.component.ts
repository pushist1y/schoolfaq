import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions-service';
import { Question } from '../models/question';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }

  questions: Array<Question> = new Array<Question>();
  order: string = "date";

  ngOnInit() {
    this.getAllQuestions();
  }

  private getAllQuestions(order?: string){
    this.questionsService.getAllQuestions(order).subscribe((questions) => {
      this.questions.length = 0;
      for (let i = 0; i < questions.length; i++) {
        this.questions.push(questions[i]);
      }
    });
  }

  onOrderChange(event:any){
    this.getAllQuestions(this.order);
  }

  onDeleteClick(id:number){
    this.questionsService.deleteQuestion(id).subscribe(() => {
      let q = this.questions.find((item) => item.id === id);
      if(!q){
        return;
      }
      let i = this.questions.indexOf(q);
      this.questions.splice(i, 1);
    });
  }

  onUpvoteClick(id:number){
    this.questionsService.upvote(id).subscribe((likes) => {
      let question = this.questions.find((q) => q.id === id);
      if(question){
        question.likesCount = likes;
      }
    });
  }

  onDownvoteClick(id:number){
    this.questionsService.downvote(id).subscribe((dislikes) => {
      let question = this.questions.find((q) => q.id === id);
      if(question){
        question.dislikesCount = dislikes;
      }
    });
  }

  onAnswerClick(id:number){
    let question = this.questions.find((q) => q.id === id);
    if(!question){
      return;
    }
    question.isEditing = true;
  }

}

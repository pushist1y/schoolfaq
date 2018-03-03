import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../models/question';
import { QuestionsService } from '../services/questions-service';

@Component({
  selector: 'app-answerquestion',
  templateUrl: './answerquestion.component.html',
  styleUrls: ['./answerquestion.component.css']
})
export class AnswerquestionComponent implements OnInit {
  @Input() question:Question;
  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
  }

  onSubmitAnswer(id: number){
    this.questionsService.answerQuestion(this.question).subscribe(() => {
      this.question.isEditing = false;
    });
  }

}

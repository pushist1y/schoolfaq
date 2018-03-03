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

  ngOnInit() {
    this.questionsService.getAllQuestions().subscribe((questions) => {
      this.questions.length = 0;
      for (let i = 0; i < questions.length; i++) {
        this.questions.push(questions[i]);
      }
    });
  }

}

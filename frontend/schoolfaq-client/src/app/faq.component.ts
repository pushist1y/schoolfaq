import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions-service';
import { Question } from '../models/question';
import { CategoriesService } from '../services/categories-service';
import { Category } from '../models/category';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private questionsService: QuestionsService,
    private catService: CategoriesService) { }

  questions: Array<Question> = new Array<Question>();
  order: string = "date";

  allCategories: Array<Category> = new Array<Category>();
  selectedCatId: number = -1;

  ngOnInit() {
    this.getAllQuestions();
    this.catService.getCategories().subscribe((cats) => {
      this.allCategories.length = 0;
      let catAll = new Category();
      catAll.id = -1;
      catAll.name = "Все";
      this.allCategories.push(catAll);
      for (let i = 0; i < cats.length; i++) {
        this.allCategories.push(cats[i]);
      }
    });
  }

  private getAllQuestions(order?: string, catId?: number) {
    this.questionsService.getAllQuestions(order, catId).subscribe((questions) => {
      this.questions.length = 0;
      for (let i = 0; i < questions.length; i++) {
        this.questions.push(questions[i]);
      }
    });
  }

  onCatChange(event: any) {
    this.getAllQuestions(this.order, this.selectedCatId);
  }

  onOrderChange(event: any) {
    this.getAllQuestions(this.order, this.selectedCatId);
  }

  onDeleteClick(id: number) {
    this.questionsService.deleteQuestion(id).subscribe(() => {
      let q = this.questions.find((item) => item.id === id);
      if (!q) {
        return;
      }
      let i = this.questions.indexOf(q);
      this.questions.splice(i, 1);
    });
  }

  onUpvoteClick(id: number) {
    this.questionsService.upvote(id).subscribe((likes) => {
      let question = this.questions.find((q) => q.id === id);
      if (question) {
        question.likesCount = likes;
      }
    });
  }

  onDownvoteClick(id: number) {
    this.questionsService.downvote(id).subscribe((dislikes) => {
      let question = this.questions.find((q) => q.id === id);
      if (question) {
        question.dislikesCount = dislikes;
      }
    });
  }

  onAnswerClick(id: number) {
    let question = this.questions.find((q) => q.id === id);
    if (!question) {
      return;
    }
    question.isEditing = true;
  }

}

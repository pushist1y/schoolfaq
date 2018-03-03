import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories-service';
import { Category } from '../models/category';
import { Question } from '../models/question';
import { QuestionsService } from '../services/questions-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  categories: Array<Category> = new Array<Category>();

  constructor(private catService: CategoriesService,
    private router: Router,
    private faqService: QuestionsService) { }

  question: Question = new Question();

  ngOnInit() {
    this.catService.getCategories().subscribe(categories => {
      for (let i = 0; i < categories.length; i++) {
        this.categories.push(categories[i]);
      }
    });
  }

  onSubmit() {
    this.faqService.saveQuestion(this.question).subscribe((question) => {
      this.router.navigateByUrl("/");
    });
    //this.dataService.changeData(this.inputData);
    //this.router.navigateByUrl("/progress");
  }

}

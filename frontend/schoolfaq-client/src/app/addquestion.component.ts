import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories-service';
import { Category } from '../models/category';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  categories: Array<Category> = new Array<Category>();

  constructor(private catService: CategoriesService) { }

  ngOnInit() {
    this.catService.getCategories().subscribe(categories => {
      for (let i = 0; i < categories.length; i++) {
        this.categories.push(categories[i]);
      }
    });
  }

}

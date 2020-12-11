import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit(): void {
  }

  getCategories():Category[] {
    return this.categoryRepository.getCategories()
  }
  deleteCategory(category:Category) {
    this.categoryRepository.deleteCategory(category._id);
  }

}

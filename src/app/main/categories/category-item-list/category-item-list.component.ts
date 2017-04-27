import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {ICategoryName} from '../../shared/icategory-name';
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-item-list',
  templateUrl: './category-item-list.component.html',
  styleUrls: ['./category-item-list.component.css']
})

export class CategoryItemListComponent implements OnInit {
  categoryListName: ICategoryName[];


  constructor(private categoryService: CategoryService, private routing: Router) {
  }

  ngOnInit() {
    this.categoryListName = this.categoryService.getCategoryNameList();
  }


  setFilter(category: ICategoryName) {
    console.dir("Select category ----" + category.name);
    this.categoryService.setCurrentCategory(category);
    this.routing.navigate(['my/category']);
  }

  isActive(id) {
    return true;
  }
}

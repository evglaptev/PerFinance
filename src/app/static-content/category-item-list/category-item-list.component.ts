import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from "../../services/category.service";
import {ICategoryName} from "../../shared/icategory-name";

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
    this.categoryService.setCurrentCategory(category);
   // this.routing.navigate(['my/category']);
  }
/* состояние элемента списка категории ( выбрано/ не выбрано) */
  isActive(id) {
    return true;
  }
}

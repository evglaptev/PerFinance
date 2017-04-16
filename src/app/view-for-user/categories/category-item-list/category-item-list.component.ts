import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../constants/category.enum';
import {ICategoriesName} from "../../shared/icategories-name";

@Component({
  selector: 'app-category-item-list',
  templateUrl: './category-item-list.component.html',
  styleUrls: ['./category-item-list.component.css']
})
export class CategoryItemListComponent implements OnInit {
  @Input() categoriesName: ICategoriesName[];
  @Input() currentCategory: Category;
  @Output() categoryChange = new EventEmitter();




  constructor() {
  }

  ngOnInit() {
  }


  setFilter(id) {
    this.categoryChange.emit(id);
  }

  isActive(id) {
    return true;
  }
}

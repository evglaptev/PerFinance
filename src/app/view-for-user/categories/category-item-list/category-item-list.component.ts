import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../constants/category.enum';

@Component({
  selector: 'app-category-item-list',
  templateUrl: './category-item-list.component.html',
  styleUrls: ['./category-item-list.component.css']
})
export class CategoryItemListComponent implements OnInit {

  @Input() currentCategory: Category;
  @Output() categoryChange = new EventEmitter();

  categoriesName: { id: Category, value: string }[] = [
    {id: Category.AZS, value: 'AZS'},
    {id: Category.Health, value: 'Health'},
    {id: Category.Food, value: 'Food'},
    {id: Category.ALL, value: 'All'}
  ];

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

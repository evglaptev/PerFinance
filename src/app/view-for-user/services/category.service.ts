import { Injectable } from '@angular/core';
import {DataService} from '../data.service';
import {ICategoryName} from '../shared/icategory-name';
import {IOperationsData} from '../shared/ioperations-data';
import {Category} from '../constants/category.enum';
import {Subject} from 'rxjs';

@Injectable()
export class CategoryService {
  currentCategory: ICategoryName;
  namesOfCategories: ICategoryName[];
  subject: Subject<IOperationsData[]>;

  constructor(private dataService: DataService) {
    this.namesOfCategories = [
      {id: Category.AZS, name: 'AZS'},
      {id: Category.Health, name: 'Health'},
      {id: Category.Food, name: 'Food'},
      {id: Category.ALL, name: 'ALL'}
    ];
    this.currentCategory = this.namesOfCategories.find(item => {
      return item.id === Category.ALL;
    });
    this.subject = new Subject();
  }

  getOperationsListForCurrentCategory(): Subject<IOperationsData[]> {
    if (typeof this.currentCategory === 'undefined') {
      console.dir('currentCategory is empty!');
      return null;
    }
    console.dir('returned subject getOperListForCurCat');
    return this.subject;
  }


  setCurrentCategory(currentCategory: ICategoryName) {
    if (!this.namesOfCategories
        .some((elem: ICategoryName) => {
          return currentCategory.id === elem.id;
        }))
      console.dir('Selected category not exist in categoryName[]');
    let data = this.dataService.getDataForCurrentUser();
    this.currentCategory = currentCategory;
    this.subject.next(
      (this.currentCategory.id === Category.ALL) ? data :
        data
          .filter((item: IOperationsData) => {
            return this.currentCategory.id === item.type;
          }));
  }

  getCategoryNameList(): ICategoryName[] {
    if (typeof this.namesOfCategories === 'undefined') {
      console.dir('CategoryNameList is undefined');
      return;
    }
    return this.namesOfCategories;
  }
}

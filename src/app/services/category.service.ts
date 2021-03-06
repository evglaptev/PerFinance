import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ICategoryName} from '../shared/icategory-name';
import {IOperationsData} from '../shared/ioperations-data';
import {DataService} from './data.service';
import {Category} from '../constants/category.enum';

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

  getOperationsListForCurrentCategory(): Observable<IOperationsData[]> {
    if (typeof this.currentCategory === 'undefined') {
      console.dir('currentCategory is empty!');
      return null;
    }
    return this.subject.asObservable();
  }


  setCurrentCategory(currentCategory: ICategoryName) {
    if (!this.namesOfCategories
        .some((elem: ICategoryName) => {
          return currentCategory.id === elem.id;
        }))
      console.dir('Selected category not exist in categoryName[]');

    this.currentCategory = currentCategory;
    this.dataService.getDataForCurrentUser()
      .subscribe(data => {
        this.subject.next(
          (this.currentCategory.id === Category.ALL) ? data :
            data
              .filter((item: IOperationsData) => {
                return this.currentCategory.id === item.type;
              }));
      });

  }

  getCategoryNameList(): ICategoryName[] {
    if (typeof this.namesOfCategories === 'undefined') {
      console.dir('CategoryNameList is undefined');
      return;
    }
    return this.namesOfCategories;
  }

  getNameCategoryById(id : Category){
    return this.namesOfCategories.find(item => item.id === id).name;
  }
}

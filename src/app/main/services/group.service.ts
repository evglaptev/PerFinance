import {Injectable, OnInit} from '@angular/core';
import {CategoryService} from './category.service';
import {PeriodService} from './period.service';
import {IOperationsData} from '../shared/ioperations-data';
import {ICategoryName} from '../shared/icategory-name';
import {Observable, ReplaySubject, Subject} from "rxjs";

@Injectable()
export class GroupService{


  private allCategoryList: ICategoryName[];
//private sub : Subject<ICategoryName[]>;
private replaySubject:ReplaySubject<ICategoryName[]>;

  constructor(private periodService: PeriodService, private categoryService: CategoryService) {
    this.replaySubject = new ReplaySubject(1);
    this.allCategoryList = this.categoryService.getCategoryNameList();
    this.periodService.getCurrentPeriodData()
      .subscribe(data => {
        console.dir('событие получения периода даты ');
        console.dir(data); console.dir('Обновление данных группировки');
        console.dir(data);
        this.clearPrice();
        data.forEach(itemData => {
          this.allCategoryList.forEach(itemCat => {
            if (itemCat.id === itemData.type) {
              itemCat.price += itemData.price;
            }
          });
        });
        console.dir('replaySubject.next');
        this.replaySubject.next(this.allCategoryList.filter(item => item.price));
      });



    //this.sub = new Subject();
    console.dir('Конструктор GroupService');
  }

  private update(data: IOperationsData[]) {

    //this.sub.next(this.allCategoryList.filter(item => item.price));
  }

  getGroupList() {
    console.dir('observable get group list');
   // return  this.sub.asObservable();
    return this.replaySubject.asObservable();
  }

  private clearPrice() {
    this.allCategoryList.forEach(item => item.price = 0);
  }

}

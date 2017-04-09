import { Component } from '@angular/core';
import {DataService} from './data.service';
import {IData} from './shared/idata';
import {Category} from './constants/category.enum';
import {hasProperties} from 'codelyzer/util/astQuery';
import {isNumber} from 'util';
import {ITimePeriod} from './itime-period';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  forViewData: IData[];
  data: IData[];
  groupList = {
    sumAzs: 0,
    sumHealth: 0,
    sumFood: 0,
    sumAll: 0
  };

  currentCategory: Category = Category.ALL;
  isTimePeriodView: boolean;
  isOperationListView: boolean;

  constructor(private dataService: DataService) {
    this.isTimePeriodView = false;
    this.isOperationListView = false;
    dataService.getDataByName('Вася', val => {
      this.data = val;
    });

    this.update();
  }


  onCategoryChange(currentCategory: Category) {

    if (
      this.currentCategory === currentCategory && this.isOperationListView === true
    ) return;

    this.currentCategory = currentCategory;
    this.isTimePeriodView = false;
    this.isOperationListView = true;
    this.update();
    // меняем текущую категорию

  }


  onTimePeriodChange(timePeriod: ITimePeriod) {
    const periodData: IData[] = this.data.filter(item => {
      if (
        item.time.getTime() >= timePeriod.from.getTime()
        && item.time.getTime() <= timePeriod.to.getTime()
      ) console.dir(true);
      return (
        item.time.getTime() >= timePeriod.from.getTime()
        && item.time.getTime() <= timePeriod.to.getTime()
      );


    });


    this.groupList.sumAzs = 0;
    this.groupList.sumFood = 0;
    this.groupList.sumHealth = 0;
    console.dir(periodData);

    periodData.forEach(item => {

      switch (item.type) {

        case Category.AZS: {
          this.groupList.sumAzs += item.price;
          return;
        }
        case Category.Health: {

          this.groupList.sumHealth += item.price;
          return;
        }
        case Category.Food: {

          this.groupList.sumFood += item.price;
          return;
        }

      }
    });
    this.groupList.sumAll = this.groupList.sumAzs + this.groupList.sumFood + this.groupList.sumHealth;
    this.isTimePeriodView = true;
    this.isOperationListView = false;
    this.update();

  }


  update() {
    if (this.currentCategory === Category.ALL) {

      this.forViewData = this.data;
      return;
    }
    this.forViewData = this.data.filter(val => {
      if (val.type === this.currentCategory) return true;
      return false;
    });
  }


}

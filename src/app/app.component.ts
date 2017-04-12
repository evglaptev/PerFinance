import { Component } from '@angular/core';
import {DataService} from './data.service';
import {IData} from './shared/idata';
import {Category} from './constants/category.enum';
import {ITimePeriod} from './itime-period';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  forViewData: IData[];
  data: IData[];
  periodData: IData[];
  currentCategory: Category = Category.ALL;
  isTimePeriodView: boolean;
  isOperationListView: boolean;

  constructor(private dataService: DataService) {
    this.isTimePeriodView = false;
    this.isOperationListView = false;
    dataService.getDataByName('Вася', val => {
      this.data = val;
    });

   // this.update();
  }


  onCategoryChange(currentCategory: Category) {
console.dir('Category change');
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
    this.periodData = this.data.filter(item => {
      return (
        item.time.getTime() >= timePeriod.from.getTime()
        && item.time.getTime() <= timePeriod.to.getTime()
      );
    });
    this.isOperationListView = false;
    this.isTimePeriodView = true;
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

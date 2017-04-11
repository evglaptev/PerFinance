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
  groupList = {
    sumAzs: 0,
    sumHealth: 0,
    sumFood: 0,
    sumAll: 0
  };
  groupCategory = {

    categoryList: {
      length: 0,
    },
  incPriceForCategory : function (cat: Category, price: number) {
    if (this.categoryList[cat]) {
      this.categoryList[cat] = this.categoryList[cat] + price;
    } else {
      this.categoryList[cat] = price;
      this.categoryList.length++;
    }
    this.categoryList[Category.ALL] =(this.categoryList[Category.ALL]) ?
      this.categoryList[Category.ALL] + price : price;
  },

  getPriceCategory : function(cat: Category){
    if (this.categoryList[cat]) return this.categoryList[cat];
    console.dir(cat + ' is ' + this.categoryList[cat]);
  },
    getCategoryList: function(){
      return this.categoryList;
    },
    clear: function () {
      this.categoryList = {
        length: 0
      };

    }
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
      return (
        item.time.getTime() >= timePeriod.from.getTime()
        && item.time.getTime() <= timePeriod.to.getTime()
      );


    });


    this.groupCategory.clear();



    periodData.forEach(item => {
          this.groupCategory.incPriceForCategory(item.type, item.price);
    });

    this.groupList.sumFood = this.groupCategory.getPriceCategory(Category.Food);
    this.groupList.sumHealth = this.groupCategory.getPriceCategory(Category.Health);
    this.groupList.sumAzs = this.groupCategory.getPriceCategory(Category.AZS);
    this.groupList.sumAll = this.groupCategory.getPriceCategory(Category.ALL);
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

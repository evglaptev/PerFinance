import {Component, Input, OnInit} from '@angular/core';
import {IData} from '../shared/idata';
import {Category} from "../constants/category.enum";

@Component({
  selector: 'app-static-of-period',
  templateUrl: './static-of-period.component.html',
  styleUrls: ['./static-of-period.component.css']
})
export class StaticOfPeriodComponent implements OnInit {

  _periodData: IData[];
  get periodData(): IData[] {
    return this._periodData;
  }

  @Input('periodData')
  set allowDay(value: IData[]) {
    this._periodData = value;
    this.update();
  }
    categoryList: {
      length: 0,
    };
  AZS: 0;
  All: 0;
  Food: 0;
  Health: 0;
  update(){
    this.clear();
    this.periodData.forEach(item => {
      this.incPriceForCategory(item.type, item.price);
    });
    this.AZS = this.getPriceCategory(Category.AZS) || 0;
    this.Food = this.getPriceCategory(Category.Food) || 0;
    this.Health = this.getPriceCategory(Category.Health) || 0;
    this.All = this.getPriceCategory(Category.ALL) || 0;

  }
  incPriceForCategory(cat: Category, price: number) {
    if (this.categoryList[cat]) {
      this.categoryList[cat] = this.categoryList[cat] + price;
    } else {
      this.categoryList[cat] = price;
      this.categoryList.length++;
    }
    this.categoryList[Category.ALL] = (this.categoryList[Category.ALL]) ?
      this.categoryList[Category.ALL] + price : price;
  };

  getPriceCategory(cat: Category) {
    if (this.categoryList[cat]) return this.categoryList[cat];
    console.dir(cat + ' is ' + this.categoryList[cat]);
  };
  getCategoryList() {
    return this.categoryList;
  };
  clear() {
    this.categoryList = {
      length: 0
    };
  };

  constructor() {
  }
  ngOnInit() {
    this.update();
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Category} from 'app/constants/category.enum';

@Component({
  selector: 'app-static-of-period',
  templateUrl: './static-of-period.component.html',
  styleUrls: ['./static-of-period.component.css']
})
export class StaticOfPeriodComponent implements OnInit {

  @Input() periodData;

    categoryList: {
      length: 0,
    };
  AZS: 0;
  All: 0;
  Food: 0;
  Health: 0;
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
    this.clear();
    console.dir('ngOnInit');

    console.dir(this.periodData);
    this.periodData.forEach(item => {
      this.incPriceForCategory(item.type, item.price);
    });
    this.AZS = this.getPriceCategory(Category.AZS);
    this.Food = this.getPriceCategory(Category.Food);
    this.Health = this.getPriceCategory(Category.Health);
    this.All = this.getPriceCategory(Category.ALL);
  }

}

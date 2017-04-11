import {Component, Input, OnInit} from '@angular/core';
import {Category} from 'app/constants/category.enum';

@Component({
  selector: 'app-static-of-period',
  templateUrl: './static-of-period.component.html',
  styleUrls: ['./static-of-period.component.css']
})
export class StaticOfPeriodComponent implements OnInit {

  @Input() periodData;
  groupCategory = {

    categoryList: {
      length: 0,
    },
    incPriceForCategory: function (cat: Category, price: number) {
      if (this.categoryList[cat]) {
        this.categoryList[cat] = this.categoryList[cat] + price;
      } else {
        this.categoryList[cat] = price;
        this.categoryList.length++;
      }
      this.categoryList[Category.ALL] = (this.categoryList[Category.ALL]) ?
        this.categoryList[Category.ALL] + price : price;
    },

    getPriceCategory: function (cat: Category) {
      if (this.categoryList[cat]) return this.categoryList[cat];
      console.dir(cat + ' is ' + this.categoryList[cat]);
    },
    getCategoryList: function () {
      return this.categoryList;
    },
    clear: function () {
      this.categoryList = {
        length: 0
      };

    }
  };
  AZS: 0;
  All: 0;
  Food: 0;
  Health: 0;

  constructor() {
  }

  ngOnInit() {
    this.groupCategory.clear();
    console.dir(this.periodData);
    this.periodData.forEach(item => {
      this.groupCategory.incPriceForCategory(item.type, item.price);
    });
    this.AZS = this.groupCategory.getPriceCategory(Category.AZS);
    this.Food = this.groupCategory.getPriceCategory(Category.Food);
    this.Health = this.groupCategory.getPriceCategory(Category.Health);
    this.All = this.groupCategory.getPriceCategory(Category.ALL);
  }

}

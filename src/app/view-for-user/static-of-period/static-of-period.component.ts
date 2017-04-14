import {Component, Input, OnInit} from '@angular/core';
import {IData} from '../shared/idata';
import {Category} from '../constants/category.enum';
import {ITimePeriod} from "app/view-for-user/itime-period";

@Component({
  selector: 'app-static-of-period',
  templateUrl: './static-of-period.component.html',
  styleUrls: ['./static-of-period.component.css']
})
export class StaticOfPeriodComponent implements OnInit {

  _timePeriod: ITimePeriod;
  _data: IData[];
  periodData: IData[];
  pieChartLabels: string[] = ['AZS', 'Food', 'Health'];
  pieChartData: number[];

  get currentTimePeriod(): ITimePeriod {
    return this._timePeriod;
  }

  @Input('currentTimePeriod')
  set timePeriod(value: ITimePeriod) {
    this._timePeriod = value;
    this.update();
  }

  get data(): IData[] {
    return this._data;
  }

  @Input('data')
  set data(value: IData[]) {{
      this._data = value;
      this.update();
    }
  }

  categoryList: {
    length: 0,
  };

  update() {

    if (typeof this.data === 'undefined') return;
      this.periodData = this.data.filter(item => {

      return (
        item.time.getTime() >= this.currentTimePeriod.from.getTime()
        && item.time.getTime() <= this.currentTimePeriod.to.getTime()
      );
    });

    this.clear();
    this.periodData.forEach(item => {
      this.incPriceForCategory(item.type, item.price);
    });
    this.pieChartData = Array.of(
      this.getPriceCategory(Category.AZS) || 0,
      this.getPriceCategory(Category.Food) || 0,
      this.getPriceCategory(Category.Health) || 0
    );
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

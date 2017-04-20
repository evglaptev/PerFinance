import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../constants/category.enum';
import {ITimePeriod} from "app/view-for-user/itime-period";
import {IOperationsData} from '../shared/ioperations-data';
import {PeriodService} from "../services/period.service";

@Component({
  selector: 'app-static-of-period',
  templateUrl: './static-of-period.component.html',
  styleUrls: ['./static-of-period.component.css']
})
export class StaticOfPeriodComponent implements OnInit {

  pieChartLabels: string[] = ['AZS', 'Food', 'Health'];
  pieChartData: number[]=[];
  periodData: IOperationsData[];
  categoryList: {
    length: 0,
  };

  update() {

console.dir('update staticPeriod');
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

  constructor(private periodService: PeriodService) {
    this.periodService.getCurrentPeriodData()
      .subscribe((data: IOperationsData[]) => {
        this.periodData = data;
        this.update();
      });
    this.periodService.update();
  }

  ngOnInit() {
  }

}

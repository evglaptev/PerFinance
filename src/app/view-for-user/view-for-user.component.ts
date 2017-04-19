import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {IData} from './shared/idata';
import {Category} from './constants/category.enum';
import {ITimePeriod} from './itime-period';
import {ICategoriesName} from "./shared/icategories-name";

@Component({
  selector: 'app-view-for-user',
  templateUrl: './view-for-user.component.html',
  styleUrls: ['./view-for-user.component.css']
})




export class ViewForUserComponent implements OnInit{


  forViewData: IData[];
  data: IData[];
  currentCategory: Category = Category.ALL;
  currentTimePeriod: ITimePeriod;
  isTimePeriodView: boolean;
  isOperationListView: boolean;
  categoriesName: ICategoriesName[] =
  [
    {id: Category.AZS, name: 'AZS'},
    {id: Category.Health, name: 'Health'},
    {id: Category.Food, name: 'Food'}

  ];
  ngOnInit(): void {
    this.isTimePeriodView = false;
    this.isOperationListView = false;
    this.dataService.getDataByName('Вася');
  }

  constructor(private dataService: DataService) {
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
   this.currentTimePeriod = timePeriod;
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

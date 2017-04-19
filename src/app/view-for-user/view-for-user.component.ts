import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {IOperationsData} from './shared/ioperations-data';
import {Category} from './constants/category.enum';
import {ITimePeriod} from './itime-period';

@Component({
  selector: 'app-view-for-user',
  templateUrl: './view-for-user.component.html',
  styleUrls: ['./view-for-user.component.css']
})




export class ViewForUserComponent implements OnInit {


  data: IOperationsData[];
  currentTimePeriod: ITimePeriod;
  isTimePeriodView: boolean;
  isOperationListView: boolean;
  ngOnInit(): void {
    this.isTimePeriodView = false;
    this.isOperationListView = true;
    this.dataService.getDataForCurrentUser();
  }

  constructor(private dataService: DataService) {
  }


  onCategoryClick() {
    console.dir('Click on Category');
    this.isTimePeriodView = false;
    this.isOperationListView = true;
  }


  onTimePeriodChange(timePeriod: ITimePeriod) {
   this.currentTimePeriod = timePeriod;
    this.isOperationListView = false;
    this.isTimePeriodView = true;
  }





}

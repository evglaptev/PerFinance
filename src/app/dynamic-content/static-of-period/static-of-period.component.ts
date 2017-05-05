import {Component, Input, OnInit} from '@angular/core';
import {GroupService} from "../../services/group.service";
import {ICategoryName} from "../../shared/icategory-name";

@Component({
  selector: 'app-static-of-period',
  templateUrl: './static-of-period.component.html',
  styleUrls: ['./static-of-period.component.css']
})
export class StaticOfPeriodComponent {
   pieChartLabels: string[];
   pieChartData: number[] = [];
   chartIsVisible = false;
   categoryList: ICategoryName[];
  sum=0;


  constructor(private groupService: GroupService) {

    this.groupService.getGroupList().subscribe(data => {
      this.categoryList = data;
         this.sum = data.map(item=>item.price).reduce((previousValue, currentValue) => previousValue + currentValue);
      this.chartIsVisible = false;
      this.pieChartLabels = data.map(item => {
        return item.name;
      });
      this.pieChartData = data.map(item => item.price);
      setTimeout((() => this.chartIsVisible = true), 100);
    });
  }
}


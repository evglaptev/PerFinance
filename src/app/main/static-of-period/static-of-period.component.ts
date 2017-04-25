import {Component, Input, OnInit} from '@angular/core';
import {GroupService} from "../services/group.service";
import {ICategoryName} from "../shared/icategory-name";

@Component({
  selector: 'app-static-of-period',
  templateUrl: './static-of-period.component.html',
  styleUrls: ['./static-of-period.component.css']
})
export class StaticOfPeriodComponent implements OnInit{
  pieChartLabels: string[];
  pieChartData: number[] = [];
  chartIsVisible=false;
  ngOnInit(): void {

  }

  constructor(private groupService: GroupService) {

    this.groupService.getGroupList().subscribe(data => {

      console.dir('update static-of-period');
      console.dir(data);
      this.pieChartLabels = data.map(item => {
        return item.name;
      });
      this.pieChartData = data.map(item => {
        return item.price;
      });
      this.chartIsVisible=true;
      console.dir(this.pieChartLabels);
    });
    console.dir('static-of-period init');
  }
}


import { Component, OnInit, Input } from '@angular/core';
import 'chart.js';
import {ITimePeriod} from "../../itime-period";
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  isLabelsDone=false;
  isDataDone=false;
  _pieChartData: number[] ;
  sumPrice: number;
  pieChartType = 'pie';

  _pieChartLabels:string[];
  @Input('pieChartLabels')
  set pieChartLabels(value: string[]) {
    if (value.length>0) {
      this._pieChartLabels = value;
      this.isLabelsDone=true;
    }
  }
  get pieChartLabels(): string[] {
  return this._pieChartLabels;
}

  get pieChartData(): number[] {
    return this._pieChartData;
  }

  @Input('pieChartData')
  set pieChartData(value: number[]) {
    if(value.length>0) {
      console.dir('Set pieChartData property');
      console.dir(value);
      this.sumPrice = value.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
      })
      this._pieChartData = value;
      this.isDataDone=true;
    }
    };

@Input() currentTimePeriod:ITimePeriod;

  constructor() {
  }

  ngOnInit() {
console.dir('pipe init');
  }



  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}

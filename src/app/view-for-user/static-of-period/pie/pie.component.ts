import { Component, OnInit, Input } from '@angular/core';
import 'chart.js';
import {ITimePeriod} from "../../itime-period";
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  @Input() pieChartLabels: string[];
  _pieChartData: number[] ;
  sumPrice:number;
  pieChartType: string = 'pie';
  get pieChartData(): number[] {
    return this._pieChartData;
  }

  @Input('pieChartData')
  set pieChartData(value: number[]) {
    this.sumPrice = value.reduce((previousValue,currentValue)=>{
      return previousValue+currentValue;
    })
    this._pieChartData = value;
  };

@Input() currentTimePeriod:ITimePeriod;

  constructor() {
  }

  ngOnInit() {

  }



  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}

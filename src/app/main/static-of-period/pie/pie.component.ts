import { Component, OnInit, Input } from '@angular/core';
import 'chart.js';
import {ITimePeriod} from "../../itime-period";
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  _pieChartData: number[] ;
  sumPrice: number;
  pieChartType = 'doughnut';
  _pieChartLabels: string[];

  @Input('pieChartLabels')
  set pieChartLabels(value: string[]) {
    console.dir('property labels');
    console.dir(value);

      this._pieChartLabels = value;
  }
  get pieChartLabels(): string[] {
    console.dir('getting chartlabels');
    console.dir(this._pieChartLabels);
  return this._pieChartLabels;
}

  get pieChartData(): number[] {
    return this._pieChartData;
  }

  @Input('pieChartData')
  set pieChartData(value: number[]) {
      console.dir('Set pieChartData property');
      console.dir(value);
      this.sumPrice = value.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
      })
      this._pieChartData = value;

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

import { Component, OnInit, Input } from '@angular/core';
import 'chart.js';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
  private _pieChartData: number[];
  private pieChartType = 'doughnut';
  private _pieChartLabels: string[];
  get pieChartLabels(): string[] {
    return this._pieChartLabels;
  }

  @Input('pieChartLabels')
  set pieChartLabels(value: string[]) {
    this._pieChartLabels = value;
  }

  get pieChartData(): number[] {
    return this._pieChartData;
  }

  @Input('pieChartData')
  set pieChartData(value: number[]) {
    this._pieChartData = value;
  }
}

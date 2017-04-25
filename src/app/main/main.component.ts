import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  isTimePeriodView = false;
  isOperationListView = false;

  ngOnInit(): void {
  }

  constructor() {
  }

  onCategoryClick() {
    console.dir('Click on Category');
    this.isTimePeriodView = false;
    this.isOperationListView = true;
  }

  onTimePeriodChange() {
    this.isOperationListView = false;
    this.isTimePeriodView = true;
  }
}

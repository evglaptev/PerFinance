import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-for-user',
  templateUrl: './view-for-user.component.html',
  styleUrls: ['./view-for-user.component.css']
})

export class ViewForUserComponent implements OnInit {
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

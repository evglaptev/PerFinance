import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  userName: string;
  isTimePeriodView = false;
  isOperationListView = false;
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

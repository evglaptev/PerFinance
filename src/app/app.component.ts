import { Component } from '@angular/core';
import {DataService} from './data.service';
import {IData} from './shared/idata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data: IData[];
  item: IData;
items: string[];

  constructor(private as: DataService) {
    as.getDataByName('Вася', val => {this.data = val; });
    this.items = ['AZS', 'HEALTH', 'FOOD'];
  }


}

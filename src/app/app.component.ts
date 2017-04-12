import { Component } from '@angular/core';
import {DataService} from './view-for-user/data.service';
import {IData} from './view-for-user/shared/idata';
import {Category} from './view-for-user/constants/category.enum';
import {ITimePeriod} from './view-for-user/itime-period';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  userName: string;

  }

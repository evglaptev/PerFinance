import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ITimePeriod} from '../../itime-period';

@Component({
  selector: 'app-period-item-list',
  templateUrl: './period-item-list.component.html',
  styleUrls: ['./period-item-list.component.css']
})
export class PeriodItemListComponent implements OnInit {
  @Output() onTimePeriodChange = new EventEmitter();
 timePeriod: ITimePeriod = {from: new Date(), to: new Date()};
  constructor() {
    this.timePeriod.from =  new Date( new Date().getFullYear()-1, 0, 1);
    this.timePeriod.to =  new Date( new Date().getFullYear(), 11, 31);
    console.dir("new Date().getFullYear() --- " + new Date().getFullYear());
    console.dir("this.timePeriod.from --- " + this.timePeriod.from);
    console.dir("this.timePeriod.to --- " + this.timePeriod.to);

  }

  ngOnInit() {
  }

  changePeriod() {

    this.onTimePeriodChange.emit(this.timePeriod);
  }

}

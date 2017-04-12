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
  }
   currentYear : ITimePeriod =  {
    from: new Date( new Date().getFullYear(), 0, 1),
    to : new Date( new Date().getFullYear()+1, 0, 1) // this is bug!
  };
  currentMonth: ITimePeriod =
    {
      from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      to: new Date(new Date().getFullYear(), new Date().getMonth()+1, 1)
    };
  currentDay: ITimePeriod = {
    from: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
    to: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1)
  };


  ngOnInit() {
  }

  changePeriod(period:ITimePeriod) {
    this.onTimePeriodChange.emit(period);
  }

}

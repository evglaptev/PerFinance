import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ITimePeriod} from '../../shared/itime-period';
import {PeriodService} from '../../services/period.service';

@Component({
  selector: 'app-period-item-list',
  templateUrl: './period-item-list.component.html',
  styleUrls: ['./period-item-list.component.css']
})
export class PeriodItemListComponent {
  currentYear: ITimePeriod = {
    from: new Date(new Date().getFullYear(), 0, 1),
    to: new Date(new Date().getFullYear() + 1, 0, 1) // this is bug!
  };
  currentMonth: ITimePeriod =
    {
      from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      to: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
    };
  currentDay: ITimePeriod = {
    from: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
    to: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1)
  };

  constructor(private periodService: PeriodService, private router: Router) {
  }

  changePeriod(period: ITimePeriod) {
    console.dir(period);
    this.periodService.setCurrentPeriod(period);
    //this.router.navigate(['my/statistics']);

  }
}

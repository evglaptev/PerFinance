import { Injectable } from '@angular/core';
import {IOperationsData} from '../shared/ioperations-data';
import {DataService} from "../data.service";
import {Subject} from "rxjs";
import {ITimePeriod} from "../itime-period";

@Injectable()
export class PeriodService {
  private timePeriod: ITimePeriod;
  private periodData: IOperationsData[];
  private subject: Subject<IOperationsData[]>;

  constructor(private dataService: DataService) {
    this.subject = new Subject();
  }

  setCurrentPeriod(timePeriod: ITimePeriod) {
    this.timePeriod = timePeriod;
    this.updateData();
  }

  private updateData() {
    console.dir(this.periodData);
    this.periodData = this.dataService.getDataForCurrentUser().filter(item => {
      return (
        item.time.getTime() >= this.timePeriod.from.getTime()
        && item.time.getTime() <= this.timePeriod.to.getTime()
      );
    });
    this.subject.next(this.periodData);
    console.dir('Произошло событие с');
    console.dir(this.periodData);
  }

  update() {
    this.updateData();
  }

  getCurrentPeriodData(): Subject<IOperationsData[]> {

    return this.subject;
  }

}

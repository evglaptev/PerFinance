import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {ITimePeriod} from '../shared/itime-period';
import {IOperationsData} from '../shared/ioperations-data';
import {DataService} from './data.service';

@Injectable()
export class PeriodService {
  private timePeriod: ITimePeriod;
  private periodData: IOperationsData[] = [];
  private replaySubject: ReplaySubject<IOperationsData[]>;
  private data: IOperationsData[];

  constructor(private dataService: DataService) {
    this.replaySubject = new ReplaySubject(1);
    this.dataService.getDataForCurrentUser().subscribe(val => {
      this.data = val;
    });
  }

  setCurrentPeriod(timePeriod: ITimePeriod) {
    this.timePeriod = timePeriod;
    this.updateData();
  }
/* выбор операций в рамках текущего периода */
  private updateData() {
    this.periodData = this.data.filter(item => {
      return (
        item.time.getTime() >= this.timePeriod.from.getTime()
        && item.time.getTime() <= this.timePeriod.to.getTime()
      );
    });
    this.replaySubject.next(this.periodData);
  }

  getCurrentPeriodData(): Observable<IOperationsData[]> {
    return this.replaySubject.asObservable();
  }
}

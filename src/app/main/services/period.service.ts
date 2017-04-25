import { Injectable } from '@angular/core';
import {IOperationsData} from '../shared/ioperations-data';
import {DataService} from '../data.service';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {ITimePeriod} from '../itime-period';
import {GroupService} from './group.service';

@Injectable()
export class PeriodService {
  private timePeriod: ITimePeriod;
  private periodData: IOperationsData[] = [];
 // private subject: Subject<IOperationsData[]>;
  private replaySubject: ReplaySubject<IOperationsData[]>;
  private data: IOperationsData[];

  constructor(private dataService: DataService) {
   // this.subject = new Subject();
    this.replaySubject = new ReplaySubject(1);
    this.dataService.getDataForCurrentUser().subscribe(val => {
      this.data = val;
    });


  }

  setCurrentPeriod(timePeriod: ITimePeriod) {
    this.timePeriod = timePeriod;
    this.updateData();
  }

  private updateData() {
    this.periodData = this.data.filter(item => {
      return (
        item.time.getTime() >= this.timePeriod.from.getTime()
        && item.time.getTime() <= this.timePeriod.to.getTime()
      );
    });
     console.dir('Сейчас будет вызван next у subject');
     console.dir(this.periodData);
   // this.subject.next(this.periodData);
    this.replaySubject.next(this.periodData);
    // console.dir('Произошло событие с');
    // console.dir(this.periodData);
  }

  //update() {
  //  this.updateData();
  //}

  getCurrentPeriodData(): Observable<IOperationsData[]> {
    console.dir('Подписка на событие текущего периода');
   // return this.subject.asObservable();
    return this.replaySubject.asObservable();
  }

}

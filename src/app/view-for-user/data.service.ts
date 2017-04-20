import { Injectable } from '@angular/core';
import {AsyncDataService} from './async-data.service';
import {IOperationsData} from './shared/ioperations-data';
import {Response} from '@angular/http';

@Injectable()
export class DataService {
  data: IOperationsData[];
  name= 'Александр';

  constructor(private asyncDataService: AsyncDataService) {
    this.asyncDataService
    .getDataByName(this.name)
    .subscribe(data => this.data = data,err=>console.dir('API Error '+err));
  }

  getDataForCurrentUser() {
    console.dir(this.data);
    return this.data;

  }
}



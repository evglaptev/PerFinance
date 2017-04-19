import { Injectable } from '@angular/core';
import {AsyncDataService} from './async-data.service';
import {IOperationsData} from './shared/ioperations-data';
import {Response} from '@angular/http';

@Injectable()
export class DataService {
  isActual = false;
  data: IOperationsData[];
  name: 'Александр';

  constructor(private asyncDataService: AsyncDataService) {
  }

  getDataForCurrentUser() {
    if (!this.isActual) {
      this.asyncDataService
        .getDataByName(this.name)
        .subscribe(data => this.data = data);
      this.isActual = true;
    }
    return this.data;

  }
}



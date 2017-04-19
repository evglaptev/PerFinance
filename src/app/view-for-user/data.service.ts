import { Injectable } from '@angular/core';
import {AsyncDataService} from './async-data.service';
import {IData} from './shared/idata';
import {Response} from '@angular/http';

@Injectable()
export class DataService {

  data: IData[];

  constructor(private asyncDataService: AsyncDataService) {
  }

  getDataByName(name) {
    this.asyncDataService
      .getDataByName(name)
      .subscribe(data => this.data = data);

  }
}



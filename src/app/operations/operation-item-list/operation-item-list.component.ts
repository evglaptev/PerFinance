import {Component, Input, OnInit} from '@angular/core';
import {IData} from '../../shared/idata';
import {isNumber} from 'util';

@Component({
  selector: 'app-operation-item-list',
  templateUrl: './operation-item-list.component.html',
  styleUrls: ['./operation-item-list.component.css']
})
export class OperationItemListComponent implements OnInit {
  _data: IData[];
  get data(): IData[] {
    return this._data;
  }

  @Input('data')
  set allowDay(value: IData[]) {
    this._data = value;
    this.updateCurrentPageData();
  }


  currentPageData: IData[];
  currentPage: number;
  lengthData: number;
  elementsOnPage: number;
  pageNumber: number;
  listNumPage: number[];

  constructor() {
  }

  changePage(numPage) {
    this.currentPage = numPage;
    this.updateCurrentPageData();

  }

  ngOnInit() {
    this.currentPage = 1;
    this.lengthData = this.data.length;
    this.elementsOnPage = 8;
    this.pageNumber = this.lengthData / this.elementsOnPage;
    this.listNumPage = [];
    for (let i = 1; i <= this.pageNumber; i++) {
      this.listNumPage.push(i);
    }
    this.updateCurrentPageData();
  }

  updateCurrentPageData() {
    this.currentPageData = [];
    this.currentPageData = this.data.splice(this.elementsOnPage * (this.currentPage - 1), this.elementsOnPage);
  }

}

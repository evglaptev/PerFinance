import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {IOperationsData} from '../../shared/ioperations-data';

@Component({
  selector: 'app-operation-item-list',
  templateUrl: './operation-item-list.component.html',
  styleUrls: ['./operation-item-list.component.css']
})
export class OperationItemListComponent implements OnInit {

  data: IOperationsData[];


  currentPageIsDone = false;
  currentPageData: IOperationsData[];
  currentPage: number;
  lengthData: number;
  elementsOnPage: number;
  pageNumber: number;
  listNumPage: number[];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getOperationsListForCurrentCategory().subscribe(val => {
      this.data = val;

     // this.updateListNumPage();
      this.updateCurrentPageData();
      console.dir('run constructor operationsData');

      console.dir(this.data);
    });
  }

  changePage(numPage) {
    this.currentPage = numPage;
    this.updateCurrentPageData();

  }

  updateListNumPage() {
    this.lengthData = this.data.length;
    console.dir('length filtered data: ' + this.lengthData);
    this.pageNumber = this.lengthData / this.elementsOnPage;
    this.listNumPage = [];
    for (let i = 1; i <= this.pageNumber; i++) {
      this.listNumPage.push(i);
    }
  }

  ngOnInit() {
    this.currentPage = 1;
    this.elementsOnPage = 8;
  }

  updateCurrentPageData() {
    this.currentPageData = this.data.splice(this.elementsOnPage * (this.currentPage - 1), this.elementsOnPage - 1);
    this.currentPageIsDone = typeof this.currentPageData !== 'undefined';
  }

}

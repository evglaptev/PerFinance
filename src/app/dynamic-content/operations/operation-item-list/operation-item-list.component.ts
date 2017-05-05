import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {IOperationsData} from '../../../shared/ioperations-data';

@Component({
  selector: 'app-operation-item-list',
  templateUrl: './operation-item-list.component.html',
  styleUrls: ['./operation-item-list.component.css']
})
export class OperationItemListComponent implements OnInit {

 private currentCategoryData: IOperationsData[];
   currentPageData: IOperationsData[];
   currentPage = 1;
   lengthData: number;
   elementsOnPage = 20;
   pageNumber: number;
   listNumPage: number[];

  constructor(public categoryService: CategoryService) {}
/* событие клика на номер страницы */
  changePage(numPage) {
    this.currentPage = numPage;
    this.updateCurrentPageData();
  }
/* пересчёт количества страниц  */
 private updateListNumPage() {
    this.lengthData = this.currentCategoryData.length;
    this.pageNumber = this.lengthData / this.elementsOnPage;
    this.listNumPage = [];
    for (let i = 1; i <= this.pageNumber; i++) {
      this.listNumPage.push(i);
    }
  }

  ngOnInit() {
    this.categoryService.getOperationsListForCurrentCategory().subscribe(val => {
      this.currentCategoryData = val;
      this.updateListNumPage();
      this.updateCurrentPageData();
    });
  }
  /* изменение данных текущей страницы */
 private updateCurrentPageData() {
    this.currentPageData = this.currentCategoryData.splice(this.elementsOnPage * (this.currentPage - 1), this.elementsOnPage - 1);
  }

}

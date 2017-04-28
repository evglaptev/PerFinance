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
  private currentPageData: IOperationsData[];
  private currentPage = 1;
  private lengthData: number;
  private elementsOnPage = 8;
  private pageNumber: number;
  private listNumPage: number[];

  constructor(private categoryService: CategoryService) {}
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

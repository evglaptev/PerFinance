import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  private _listNumPage: number[];
  @Input() set listNumPage(val: number[]) {
    this._listNumPage = val;
  }

  get listNumPage() {
    return this._listNumPage;
  }

  @Output() onClickPage = new EventEmitter();

  onPageClick(numberPage: number) {
    this.onClickPage.emit(numberPage);
  }
}

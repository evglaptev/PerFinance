import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  @Input() listNumPage: number[];
  @Output() onClickPage = new EventEmitter();
  constructor() {
  }

  onPageClick(numberPage: number){
    this.onClickPage.emit(numberPage);
    console.dir('click on Page ' + numberPage);
  }


  ngOnInit() {
  }

}

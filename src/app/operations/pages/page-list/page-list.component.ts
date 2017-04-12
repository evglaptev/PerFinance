import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  @Input() listNumPage: number[];
  @Output() onClickPage = new EventEmitter();
// pageList : number[];
  constructor() {
   // this.pageList = [];
  //  for (let i = 1, i <= this.pageNumber; i++){
  //  }

  }

  onPageClick(numberPage: number){
    this.onClickPage.emit(numberPage);
    console.dir('click on Page ' + numberPage);
  }


  ngOnInit() {
  }

}

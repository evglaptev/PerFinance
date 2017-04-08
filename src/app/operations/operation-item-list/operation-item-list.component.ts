import {Component, Input, OnInit} from '@angular/core';
import {IData} from '../../shared/idata';

@Component({
  selector: 'app-operation-item-list',
  templateUrl: './operation-item-list.component.html',
  styleUrls: ['./operation-item-list.component.css']
})
export class OperationItemListComponent implements OnInit {
@Input() data : IData[];
  constructor() { }

  ngOnInit() {
  }

}

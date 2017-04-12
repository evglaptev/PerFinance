import {Component, Input, OnInit} from '@angular/core';
import {IData} from '../../shared/idata';

@Component({
  selector: 'app-operation-item',
  templateUrl: './operation-item.component.html',
  styleUrls: ['./operation-item.component.css']
})
export class OperationItemComponent implements OnInit {
@Input() item : IData;
  constructor() { }


  ngOnInit() {
  }

}

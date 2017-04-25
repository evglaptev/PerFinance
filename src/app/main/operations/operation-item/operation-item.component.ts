import {Component, Input, OnInit} from '@angular/core';
import {IOperationsData} from '../../shared/ioperations-data';

@Component({
  selector: 'app-operation-item',
  templateUrl: './operation-item.component.html',
  styleUrls: ['./operation-item.component.css']
})
export class OperationItemComponent implements OnInit {
@Input() item : IOperationsData;
  constructor() { }


  ngOnInit() {
  }

}

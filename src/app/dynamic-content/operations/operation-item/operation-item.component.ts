import {Component, Input, OnInit} from '@angular/core';
import {IOperationsData} from '../../../shared/ioperations-data';
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-operation-item',
  templateUrl: './operation-item.component.html',
  styleUrls: ['./operation-item.component.css']
})
export class OperationItemComponent{
  @Input() item: IOperationsData;

  constructor(public categoryService:CategoryService) {
  }


}

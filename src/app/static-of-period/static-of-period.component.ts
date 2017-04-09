import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-static-of-period',
  templateUrl: './static-of-period.component.html',
  styleUrls: ['./static-of-period.component.css']
})
export class StaticOfPeriodComponent implements OnInit {

  constructor() { }
@Input() groupList;
  ngOnInit() {


  }

}

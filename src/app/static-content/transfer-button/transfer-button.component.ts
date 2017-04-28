import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-transfer-button',
  templateUrl: './transfer-button.component.html',
  styleUrls: ['./transfer-button.component.css']
})
export class TransferButtonComponent  {

  constructor(private router:Router) { }

  clickOnTransfer() {
    this.router.navigate(['my/transfer']);
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
transferForm:FormGroup;
  constructor(fb: FormBuilder) {
    this.transferForm = fb.group({
      'to': ['', Validators.required],
      'value': ['', Validators.required]
    });

  }




  ngOnInit() {
  }

  onSubmit(){

  }

}

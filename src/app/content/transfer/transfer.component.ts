import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService} from "app/main/data.service";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transferForm: FormGroup;
  isOk = false;
  isNotOk = false;

  constructor(fb: FormBuilder, private dataService: DataService) {
    this.transferForm = fb.group({
      'to': ['', Validators.required],
      'value': ['', Validators.required]
    });

  }

  onSubmit() {

    this.dataService.sendTransferFromCurrentUser(
      this.transferForm.controls['to'].value,
      +this.transferForm.controls['value'].value
    ).subscribe(result => {
      if (result) {
        this.isOk = true;
      } else {
        this.isNotOk = true;
      }
    });

  }


  ngOnInit() {
  }

}

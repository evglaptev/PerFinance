import { Component, OnInit } from '@angular/core';
import {
  AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validator, ValidatorFn,
  Validators
} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transferForm: FormGroup;
  isOk = false;
  isNotOk = false;

  constructor(fb: FormBuilder, public dataService: DataService) {
    this.transferForm = fb.group({
      'to': ['', [Validators.required, lengthValidator(9)], this.correctValidator()],
      'value': ['', [Validators.required, Validators.maxLength(10)]],
      'description': ['']
    });

  }
  correctValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<{ [key: string]: any }> => {
    console.dir("tttt");
    return this.dataService.accNumberIsCorrect(control.value)
      .map(val => {
        return !val ? {'NotIsCorrectAccNumber': {val}
        } : null;
      });

  };

}
  onSubmit() {

    this.dataService.sendTransferFromCurrentUser(
      this.transferForm.controls['to'].value,
      +this.transferForm.controls['value'].value,
      this.transferForm.controls['description'].value
    ).subscribe(result => {
      if (result) {
        this.isOk = true;
        this.isNotOk = false;
      } else {
        this.isNotOk = true;
        this.isOk = false;
      }
    });

  }


  ngOnInit() {
  }

}
function lengthValidator(length): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const name = control.value.toString();
    console.dir(name.length);
    return name.length !== length ? {'forbiddenLength': {length}} : null;
  };
}



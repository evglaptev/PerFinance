import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  loginForm: FormGroup;

  constructor(fb: FormBuilder,
              public authService: AuthService,
              public router: Router) {

    console.dir('login constructor')
    this.loginForm = fb.group({
      'name': ['', Validators.required],
      'password': ['', Validators.required]
    });

  }

  onSubmit() {
    this.authService.login(
      this.loginForm.controls['name'].value,
      this.loginForm.controls['password'].value
    ).subscribe(val => {
      if (val) {
        this.router.navigate(['/my']);

        console.dir('Авторизован');
      } else {
        console.dir('Неверный логин или пароль');
        this.loginForm.reset();
      }
    });
  }
}

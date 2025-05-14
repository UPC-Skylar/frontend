import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    TranslatePipe,
    MatInput,
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor() {}

  toggleForm() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm?.classList.toggle('none');
    registerForm?.classList.toggle('none');
  }


  onSubmitLogin(form: NgForm): void {
    if (form.valid) {
      console.log('Login Form Data:', form.value);

    } else {
      console.error('Login form is not valid');
    }
  }


  onSubmitRegister(form: NgForm): void {
    if (form.valid) {
      console.log('Register Form Data:', form.value);
    } else {
      console.error('Register form is not valid');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { version } from '../../../../package.json';
import { AuthService } from 'src/app/services/auth.service.js';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [ AuthService ]
})
export class LoginPageComponent implements OnInit {
  public version = version;
  email: string = null;
  password: string = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.emailLogin(this.email, this.password)
      .then(data => { 
        this.router.navigate([`/${environment.entryRoute}`]);
      })
      .catch(err => {
        alert(err.message);
        this.email = '';
        this.password = '';
        document.getElementById('email').focus();
      });
  }

  signUp() {
    this.authService.createUser(this.email, this.password)
      .then((res) => {
        alert('Welcome! We are going to redirect you to our on-boarding assistant.');
        this.router.navigate([`/${environment.entryRoute}`]);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  rememberPassword() {
    this.authService.rememberPassword(this.email)
      .then((res) => {
        alert('Reset password link sent');
      })
      .catch((err) => {
        alert(err.message);
      });
  }

}

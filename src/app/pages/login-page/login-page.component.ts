import { Component, OnInit, NgZone } from '@angular/core';
import { version } from '../../../../package.json';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public version = version;
  email: string = null;
  password: string = null;

  constructor(
    private auth: AngularFireAuth,
    private zone: NgZone,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.onAuthStateChanged(user => {
      if (user) {
        // check here if user must pass through getting-started

        // https://stackoverflow.com/questions/51455545/when-to-use-ngzone-run
        this.zone.run(() => {
          this.router.navigate([environment.entryRoute]);
        })
      }
    });
  }

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .catch(err => {
        alert(err.message);
        this.email = '';
        this.password = '';
        document.getElementById('email').focus();
      });
  }

  signUp() {
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        alert('Welcome! We are going to redirect you to our on-boarding assistant.');
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  rememberPassword() {
    this.auth.sendPasswordResetEmail(this.email)
      .then((res) => {
        alert('Reset password link sent');
      })
      .catch((err) => {
        alert(err.message);
      });
  }

}

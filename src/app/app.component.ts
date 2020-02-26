import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'firebase-base';
  showTopBar = false;

  constructor(
    private router: Router,
    private auth: AngularFireAuth
  ) {}

  ngOnInit() {
    // IF YOU WANT TO RELAY AUTOMATIC ROUTING TO APP COMPONENT
    // UNCOMMENT NEXT LINES AND GET RID OF AUTHGUARD IN app-routing.module

    // if (!this.auth.authState) { // IS NOt LOGGED IN
    //   this.auth.legacyLogin()
    //     .then(() => { // AUTH OK
    //       this.router.navigateByUrl(environment.entryRoute);
    //     })
    //     .catch((err) => { // AUTH ERR
    //       this.auth.signOut().then(() => {
    //         this.router.navigateByUrl('/');
    //       });
    //     });
    // } else { // IS LOGGED IN
    //   this.router.navigateByUrl(environment.entryRoute);
    // }
  }

  onRouterOutletActivate(event) {
    // show top bar everywhere but in LoginPageComponent
    this.showTopBar = !(event instanceof LoginPageComponent);
  }

  signOutClick() {
    this.auth.signOut()
      .then(() => {
        this.router.navigateByUrl('/');
      });
  }
}

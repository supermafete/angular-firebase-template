import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public authState: any = null;
  public userData: any = null;

  constructor(
    public afAuth: AngularFireAuth,
    private firebaseService: FirebaseService
    ) {}

  legacyLogin() {
    return new Promise ((resolve, reject) => {
      if (!this.userData) {
        this.afAuth.authState.subscribe(authState => {
          if (authState) {
            this.authState = authState;
            this.firebaseService.getUser(authState.uid).subscribe(user => {
              this.userData = user.data();
              resolve();
            });
          } else {
            reject();
          }
        });
      } else {
        resolve();
      }
    });
  }

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false;
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : '';
  }

  emailLogin(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  anonymousLogin() {
    return this.afAuth.signInAnonymously()
      .then((user) => {
        this.authState = user;
      })
      .catch(error => console.log(error));
  }

  isAuthenticated() {
    return (this.afAuth.currentUser) ? true : false;
  }

  createUser(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  rememberPassword(email) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  signOut() {
    return this.afAuth.signOut();
  }
}
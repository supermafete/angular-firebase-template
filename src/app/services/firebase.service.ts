import 'firebase/analytics';
import 'firebase/database';
import 'firebase/firestore';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  analytics;

  constructor(
    private rtdb: AngularFireDatabase,
    private stdb: AngularFirestore) {
      this.analytics = firebase.analytics();
  }

  getUser(uid) {
    return this.stdb
      .doc(`users/${uid}`)
      .get();
  }

  updateUser(uid, data) {
    return this.stdb
      .doc(`users/${uid}`)
      .update(data)
      .then(() => {

      })
      .catch(error => {
        this.stdb.doc(`users/${uid}`).set(data);
      });
  }

  logEvent(eventName, data = {}) {
    // firebase.analytics().logEvent(eventName, { param1: 'pepe'});
    this.analytics.logEvent(eventName, data);
  }

}

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


// You can paste config from:
// FIREBASE CONSOLE / PROJECT SETTINGS / YOUR APPLICATIONS / ADD APPLICATION
export const environment = {
  production: false,
  entryRoute: 'getting-started',
  firebaseConfig: {
    apiKey: '[FIREBASE-API-KEY]'
    authDomain: '[FIREBASE_AUTH_DOMAIN]',
    databaseURL: '[FIREBASE_DATABASE_URL]',
    projectId: '[FIREBASE_PROJECT_ID]',
    storageBucket: '[FIREBASE_STORAGE_BUCKET]',
    messagingSenderId: '[FIREBASE_MESSAGING_SENDER_ID',
    appId: '[FIREBASE_APP_ID]',
    measurementId: '[FIREBASE_MEASUREMENT_ID]'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

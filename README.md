# Angular Firebase Template

This is a base project for Angular integrating Firebase e-mail authentication. It's designed to start your project without the need of mess with authentication.

It also integrates [PrimeNG UI components](https://www.primefaces.org/primeng/#/) to build the user interface.

## Setting up

Just clone the repo and run:

`npm install`

or

`yarn install`

## Configuring Firebase environment

All Firebase related configuration is in `firebaseConfig` object described in `src/environments/environment.ts`

```
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
```

You can generate `firebaseConfig` in your Firebase console going to Project Settings > Your Application > Add application > Web application. Just replace `firebaseConfig` in environment.ts.

## Running the project

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## About the project

Feel free to add or modify things. Just send me a PR if you do it.
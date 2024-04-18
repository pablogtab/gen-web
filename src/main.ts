import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDledyLnq3vnsKqNvIonGxrB2e1P4xTpEU",
  authDomain: "genprojectusa.firebaseapp.com",
  projectId: "genprojectusa",
  storageBucket: "genprojectusa.appspot.com",
  messagingSenderId: "979305771569",
  appId: "1:979305771569:web:b25a2eb5108da781a69b10",
  measurementId: "G-VYP3K67JQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

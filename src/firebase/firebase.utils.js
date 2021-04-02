import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCYj2dFqvKHvrFNO0AdnfpyFfAgSqx6wKY",
    authDomain: "crwn-db-c528e.firebaseapp.com",
    projectId: "crwn-db-c528e",
    storageBucket: "crwn-db-c528e.appspot.com",
    messagingSenderId: "867196116768",
    appId: "1:867196116768:web:72bdb41d672c5c7b300145",
    measurementId: "G-24Y5Y6YSEB"
};

firebase.initializeApp(config);


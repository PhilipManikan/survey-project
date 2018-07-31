import * as firebase from 'firebase';
require("firebase/firestore")



var config = {
    apiKey: "AIzaSyDtjkHiUzN0KyqeEkC33uTVF5C8w4d4J5w",
    authDomain: "feedbackform-cfd0c.firebaseapp.com",
    databaseURL: "https://feedbackform-cfd0c.firebaseio.com",
    projectId: "feedbackform-cfd0c",
    storageBucket: "feedbackform-cfd0c.appspot.com",
    messagingSenderId: "713324849183"
  };


firebase.initializeApp(config);
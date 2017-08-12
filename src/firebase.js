import firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyCXkOlIcOZOzQQtPsuYANoUpm6sOITyh5A",
    authDomain: "lunch-97688.firebaseapp.com",
    databaseURL: "https://lunch-97688.firebaseio.com",
    projectId: "lunch-97688",
    storageBucket: "lunch-97688.appspot.com",
    messagingSenderId: "4132059133"
  };

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

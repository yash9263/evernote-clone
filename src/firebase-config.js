import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBlaAj9poLH7PSKzmNY-5sI9-zvhmnnfAs",
    authDomain: "evernote-clone-72145.firebaseapp.com",
    projectId: "evernote-clone-72145",
    storageBucket: "evernote-clone-72145.appspot.com",
    messagingSenderId: "548163722663",
    appId: "1:548163722663:web:517ad1dd518bb29d4dea82"
  };

  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// console.log(firebase.app());

export {db};
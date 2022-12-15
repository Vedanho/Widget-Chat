import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCURwPhmDeyBVYxHd6YzYUk1vkcKsyJS7s",
  authDomain: "loyal-channel-358807.firebaseapp.com",
  projectId: "loyal-channel-358807",
  storageBucket: "loyal-channel-358807.appspot.com",
  messagingSenderId: "662053254342",
  appId: "1:662053254342:web:3acddf15efdfd8bb9853c7",
  measurementId: "G-GGJ95RZRNW",
});

export const dataBase = firebaseApp.firestore();

export const auth = firebase.auth();

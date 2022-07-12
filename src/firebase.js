import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAwXRpy_jTewARpF94oxM2sk4uq9rrI4fg",
    authDomain: "covid-19-tracker-779b1.firebaseapp.com",
    projectId: "covid-19-tracker-779b1",
    storageBucket: "covid-19-tracker-779b1.appspot.com",
    messagingSenderId: "831023533033",
    appId: "1:831023533033:web:44275b76c937174d2dd978",
    measurementId: "G-6ZDBLN0EB2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

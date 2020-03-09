
  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCOPMCPaMxYShO-URdo4gPxVkbA-exxd5Y",
    authDomain: "geo-map-z.firebaseapp.com",
    databaseURL: "https://geo-map-z.firebaseio.com",
    projectId: "geo-map-z",
    storageBucket: "geo-map-z.appspot.com",
    messagingSenderId: "810772153756",
    appId: "1:810772153756:web:797832499d282b01d67459",
    measurementId: "G-BD5EBXP4C6"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore();

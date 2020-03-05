
  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  var firebaseConfig = {
    apiKey: "AIzaSyCmv8FlNEysPdRgMlnJfRLPDNC4WCuJ6iY",
    authDomain: "z-smoothies-cf9ec.firebaseapp.com",
    databaseURL: "https://z-smoothies-cf9ec.firebaseio.com",
    projectId: "z-smoothies-cf9ec",
    storageBucket: "z-smoothies-cf9ec.appspot.com",
    messagingSenderId: "821290705592",
    appId: "1:821290705592:web:a33f187dac40031c698a4d",
    measurementId: "G-83RTL5C57E"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //firebaseApp.firestore().settings({timestampsInSnapshots:true});
  export default firebaseApp.firestore();

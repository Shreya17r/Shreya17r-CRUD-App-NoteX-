import firebase from "firebase"


var firebaseConfig = {
    apiKey: "AIzaSyCz1IsRK9EOCQAJKXs2OXX_oCGJ5-av3ug",
    authDomain: "react-crud-b5feb.firebaseapp.com",
    databaseURL: "https://react-crud-b5feb-default-rtdb.firebaseio.com",
    projectId: "react-crud-b5feb",
    storageBucket: "react-crud-b5feb.appspot.com",
    messagingSenderId: "681756116143",
    appId: "1:681756116143:web:4b53f7640d04d7bdc6405a"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();

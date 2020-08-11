import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc6jMNKKGfSkrV4J5EcVbplSzTz0A2V78",
    authDomain: "firegram-e3d23.firebaseapp.com",
    databaseURL: "https://firegram-e3d23.firebaseio.com",
    projectId: "firegram-e3d23",
    storageBucket: "firegram-e3d23.appspot.com",
    messagingSenderId: "1008733185418",
    appId: "1:1008733185418:web:e0ac46d98b3091adea9473",
    measurementId: "G-EEEBL7JD5Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore ,timeStamp};
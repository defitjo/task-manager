import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBQJQrjhbTXqc5X5TWcUhh-iKPp5LkvNKY",
  authDomain: "task-manager-d42e0.firebaseapp.com",
  databaseURL: "https://task-manager-d42e0.firebaseio.com",
  projectId: "task-manager-d42e0",
  storageBucket: "task-manager-d42e0.appspot.com",
  messagingSenderId: "440530895907"
};
firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;


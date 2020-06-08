import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyB9Sai2IUExHsPUs9InCOD0gBkHTvbPC2E",
    authDomain: "ayuntamiento-2a2a8.firebaseapp.com",
    databaseURL: "https://ayuntamiento-2a2a8.firebaseio.com",
    projectId: "ayuntamiento-2a2a8",
    storageBucket: "ayuntamiento-2a2a8.appspot.com",
    messagingSenderId: "123370935722",
    appId: "1:123370935722:web:f5bf825ac6d6dcd6d887d3"
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);


  const db = app.firestore()
  const storage = app.storage()

  export {db, storage}
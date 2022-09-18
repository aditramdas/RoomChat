import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC4W_EcjidEqKnmphHvqCqoDZCYcfpohhk",
    authDomain: "chat-app-3786b.firebaseapp.com",
    projectId: "chat-app-3786b",
    storageBucket: "chat-app-3786b.appspot.com",
    messagingSenderId: "919976589009",
    appId: "1:919976589009:web:3f5298e3e2b6f5be34f7f0",
    measurementId: "G-6XLZJXS30Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider}
  export default db;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBZ0CCvYjniYWb4G6rOjagVjX3zYAZ5HPo",
    authDomain: "fb-clone-8b9be.firebaseapp.com",
    projectId: "fb-clone-8b9be",
    storageBucket: "fb-clone-8b9be.appspot.com",
    messagingSenderId: "90189293299",
    appId: "1:90189293299:web:5add5dbc6bd1eb2e8bb986",
    measurementId: "G-E8W2FZEZ0F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
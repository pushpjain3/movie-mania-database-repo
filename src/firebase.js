import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGa03Jn-I3jTlU6j-mNydopF6fegpUEbg",
  authDomain: "demo2-dd5ea.firebaseapp.com",
  projectId: "demo2-dd5ea",
  storageBucket: "demo2-dd5ea.appspot.com",
  messagingSenderId: "772052618542",
  appId: "1:772052618542:web:7cbb44bd1e7bd56329bebf",
  measurementId: "G-LB5RNYKZH2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

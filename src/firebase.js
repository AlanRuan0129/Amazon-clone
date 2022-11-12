// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD-eBJoYfjl7Uxg73escblU4AMweIS5i-U",
  authDomain: "clone-840d4.firebaseapp.com",
  projectId: "clone-840d4",
  storageBucket: "clone-840d4.appspot.com",
  messagingSenderId: "3613161907",
  appId: "1:3613161907:web:6ff269a10e6460491bf3c6",
  measurementId: "G-5ME5E9Y84R"
};

const firebaseAPP = firebase.initializeApp(firebaseConfig);

const db = firebaseAPP.firestore();
const auth = firebase.auth();

export {db, auth};
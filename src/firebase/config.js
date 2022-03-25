import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAyOVZ9XhfOnqAvHp-mhxsEPfm0lBd1IMI",
  authDomain: "actividad-10-94e4f.firebaseapp.com",
  databaseURL: "https://actividad-10-94e4f-default-rtdb.firebaseio.com",
  projectId: "actividad-10-94e4f",
  storageBucket: "actividad-10-94e4f.appspot.com",
  messagingSenderId: "860741947962",
  appId: "1:860741947962:web:8c665acd0e91ba1e825b03"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

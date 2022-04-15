import firebase from "firebase/compat/app";
import firebaseConfig from "./config";
import "firebase/compat/firestore";

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.db = firebase.firestore();
  }
}

const fb = new Firebase();

export default fb;

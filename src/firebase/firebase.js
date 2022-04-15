import firebase from "firebase/compat/app";
import firebaseConfig from "./config";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.db = firebase.firestore();
    this.storage = getStorage(firebase.initializeApp(firebaseConfig));
  }
}

const fb = new Firebase();

export default fb;

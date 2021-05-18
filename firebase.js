import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDLZG1zDFpiekh3UksmcSffXbOLnCYVmGw',
  authDomain: 'fb-clone-58a96.firebaseapp.com',
  projectId: 'fb-clone-58a96',
  storageBucket: 'fb-clone-58a96.appspot.com',
  messagingSenderId: '971598951998',
  appId: '1:971598951998:web:fa0bbd1cf5cd9f8e6f436f',
};

// Check if Firebase is initialised
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };

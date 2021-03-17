import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

const config_string = process.env['REACT_APP_FIREBASE_CONFIG'];
console.log('FBConfig', config_string);
const firebaseConfig = JSON.parse(config_string);

firebase.initializeApp(firebaseConfig);
firebase.auth().languageCode = 'no';

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const functions = firebase.functions();

const currentUser = auth.currentUser;

export { db, auth, storage, currentUser, functions };

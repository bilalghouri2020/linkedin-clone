import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBfeV7lS9Coc_rRO71WwYO_ZTUlt8UkFHs",
    authDomain: "dummy-linkedin-clone-ada08.firebaseapp.com",
    projectId: "dummy-linkedin-clone-ada08",
    storageBucket: "dummy-linkedin-clone-ada08.appspot.com",
    messagingSenderId: "486141907259",
    appId: "1:486141907259:web:8f0553f587de64d6dae71e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB3mS3csqmOvDMuFr1kzkSsX8JNwEQZXZM",
    authDomain: "book-application-d8ec8.firebaseapp.com",
    projectId: "book-application-d8ec8",
    storageBucket: "book-application-d8ec8.appspot.com",
    messagingSenderId: "927506100752",
    appId: "1:927506100752:web:769277f99e6c5dcbee5095",
    measurementId: "G-KTP2Y3E4MW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;
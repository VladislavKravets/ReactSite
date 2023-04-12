import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDSCK28-TJ5p0yfANIav0nUL-Ef1vpTSiQ",
    authDomain: "reactproject-29926.firebaseapp.com",
    projectId: "reactproject-29926",
    storageBucket: "reactproject-29926.appspot.com",
    messagingSenderId: "632748789857",
    appId: "1:632748789857:web:b14a71058771e760231a20",
    measurementId: "G-EF98T5W8ZC"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
//import 'firebase/firebase-app';
//import 'firebase/firebase-storage';


const firebaseConfig = {
    apiKey: "AIzaSyBGd0BKipmpLH9SCx3UCEdvzFgUCfCOCm0",
    authDomain: "app-porfolio.firebaseapp.com",
    projectId: "app-porfolio",
    storageBucket: "app-porfolio.appspot.com",
    messagingSenderId: "472411511804",
    appId: "1:472411511804:web:37531c3ac82506624e3079"
}

initializeApp(firebaseConfig);


const db = getFirestore();


export {db};
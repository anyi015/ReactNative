import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkihwRz13DCsZaAb-zDY6GLFKc96uKpww",
    authDomain: "reactapp-bba1f.firebaseapp.com",
    projectId: "reactapp-bba1f",
    storageBucket: "reactapp-bba1f.appspot.com",
    messagingSenderId: "1022734850341",
    appId: "1:1022734850341:web:34cebe9e4208c31ec4e2cc"
  };

  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();

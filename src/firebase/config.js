import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBIJu_NfiRyiwf1WWs-dbj1o-jkGANkFis",
    authDomain: "olx-clone-92c6a.firebaseapp.com",
    projectId: "olx-clone-92c6a",
    storageBucket: "olx-clone-92c6a.appspot.com",
    messagingSenderId: "117625373793",
    appId: "1:117625373793:web:68bc430019b437751b5620",
    measurementId: "G-RD8VFHSQ4S"
  };
  export default firebase.initializeApp(firebaseConfig)
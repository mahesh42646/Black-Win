import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCSrv5LkyxJBo4PZ6zBgbO4rB1Vh7HIzMk",
    authDomain: "black-win-lottery.firebaseapp.com",
    projectId: "black-win-lottery",
    storageBucket: "black-win-lottery.firebasestorage.app",
    messagingSenderId: "663905321330",
    appId: "1:663905321330:web:968631466c4781b4809deb",
    measurementId: "G-Q5LZ09ER2T"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);
const logout = () => signOut(auth);

export { auth, signInWithGoogle, logout, onAuthStateChanged };

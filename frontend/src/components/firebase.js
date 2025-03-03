import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDgBNg5XCDBsJ5HauIOOHY5O1gfmcKAA2M",
  authDomain: "talenvo-health-care-app.firebaseapp.com",
  projectId: "talenvo-health-care-app",
  storageBucket: "talenvo-health-care-app.appspot.com", // ✅ Corrected
  messagingSenderId: "105559908156",
  appId: "1:105559908156:web:94adc1047a62cde2118839",
  measurementId: "G-QE2NZWR6TB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 
const googleProvider = new GoogleAuthProvider(); 


export { auth, googleProvider, signInWithPopup };

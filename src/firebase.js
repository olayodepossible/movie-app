import { initializeApp } from "firebase/app";
import { auth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa0SP-9MhRonhjpRWNIlqLEvLeGuAo65s",
  authDomain: "netflix-clone-54781.firebaseapp.com",
  projectId: "netflix-clone-54781",
  storageBucket: "netflix-clone-54781.appspot.com",
  messagingSenderId: "739026699504",
  appId: "1:739026699504:web:97a581fb795e66f00dee35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();
export const authentication = auth();

export default db;

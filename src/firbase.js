import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDTFG8zxm2WCUqz8rfougAN6a-G4NDdKQM",
    authDomain: "dash-c0c37.firebaseapp.com",
    projectId: "dash-c0c37",
    storageBucket: "dash-c0c37.appspot.com",
    messagingSenderId: "290656643660",
    appId: "1:290656643660:web:d0fb8db8637c079a6a22e9",
    measurementId: "G-4JEM5L04FX"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};

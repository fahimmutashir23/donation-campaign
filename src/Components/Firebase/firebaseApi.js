import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9kwEj4i03GyZ-7ztuuDu0LH6uTJsbwdc",
  authDomain: "donation-7fa45.firebaseapp.com",
  projectId: "donation-7fa45",
  storageBucket: "donation-7fa45.appspot.com",
  messagingSenderId: "23631607529",
  appId: "1:23631607529:web:121376ede1c6b18a23a278"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

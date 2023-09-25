
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: "blog-next-a967a.appspot.com",
  messagingSenderId: "242417475870",
  appId: "1:242417475870:web:b11e6ead4a4fdcf6a0690f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY as string,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN as string,
//   databaseURL: process.env.FIREBASE_DATABASE_URL as string,
//   projectId: process.env.FIREBASE_PROJECT_ID as string,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET as string,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID as string,
//   appId: process.env.FIREBASE_APP_ID as string,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID as string
// };

const firebaseConfig = {
  apiKey: "AIzaSyAvWFS5693rtp13jixg5bgvwzmlnTgmqsY",
  authDomain: "ieeesb24.firebaseapp.com",
  databaseURL: "https://ieeesb24-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ieeesb24",
  storageBucket: "ieeesb24.appspot.com",
  messagingSenderId: "911632793518",
  appId: "1:911632793518:web:a722b28068fd101ec7523f",
  measurementId: "G-X50CCGD6GN"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_xZ54dbHEUCRJzzcpvOZNx_RncbPiJH8",
  authDomain: "live-chat-teachme.firebaseapp.com",
  projectId: "live-chat-teachme",
  storageBucket: "live-chat-teachme.firebasestorage.app",
  messagingSenderId: "906090448812",
  appId: "1:906090448812:web:4d305d1a930795a8d65c09"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
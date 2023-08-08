import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa2_UWvJ030CqL_38QopqOUxc7PlGXylI",
  authDomain: "chat-20e41.firebaseapp.com",
  projectId: "chat-20e41",
  storageBucket: "chat-20e41.appspot.com",
  messagingSenderId: "19076649986",
  appId: "1:19076649986:web:c50fd65a90c47d3d72431b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
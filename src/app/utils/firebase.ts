import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  authDomain: "allthat-ae614.firebaseapp.com",
  projectId: "allthat-ae614",
  storageBucket: "allthat-ae614.appspot.com",
  messagingSenderId: "208740601681",
  appId: "1:208740601681:web:33d2c81e47b23cc20b0d70",
};

export const firebaseAppInit = initializeApp(firebaseConfig);

const auth = getAuth(firebaseAppInit);

export { auth };

require("dotenv").config();

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_ECOMMERCE_API,
    authDomain: process.env.REACT_APP_FIREBASE_ECOMMERCE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_ECOMMERCE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_ECOMMERCE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_ECOMMERCE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_ECOMMERCE_APP_ID
  };


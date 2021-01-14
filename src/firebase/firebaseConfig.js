require("dotenv").config();

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_ECOMMERCE_API,
    authDomain: process.env.REACT_APP_FIREBASE_ECOMMERCE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_ECOMMERCE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_ECOMMERCE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_ECOMMERCE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_ECOMMERCE_APP_ID
  };

// export const firebaseConfig = {
//   apiKey: "AIzaSyBQK-zpy2YHGNgOT5FWD8ULFRiTP1JHVcU",
//   authDomain: "my-ecommerce-website-fac9f.firebaseapp.com",
//   projectId: "my-ecommerce-website-fac9f",
//   storageBucket: "my-ecommerce-website-fac9f.appspot.com",
//   messagingSenderId: "1064980510660",
//   appId: "1:1064980510660:web:6a62308067551db5665691"
// };
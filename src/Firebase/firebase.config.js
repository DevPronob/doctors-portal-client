// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzdbQ-iRfMP1ov94ERjXQYtEAGud1rwRc",
  authDomain: "doctors-portal-2-bb3ca.firebaseapp.com",
  projectId: "doctors-portal-2-bb3ca",
  storageBucket: "doctors-portal-2-bb3ca.appspot.com",
  messagingSenderId: "672908015242",
  appId: "1:672908015242:web:3a0139cb485e2e4786df73"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;






//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
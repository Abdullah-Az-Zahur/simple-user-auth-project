// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGsPoVJmSm9IgeuRT2X2t9uBY1BEctTrc",
    authDomain: "simple-user-auth-project.firebaseapp.com",
    projectId: "simple-user-auth-project",
    storageBucket: "simple-user-auth-project.appspot.com",
    messagingSenderId: "605854156358",
    appId: "1:605854156358:web:918ccc4f231ac4641fec47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
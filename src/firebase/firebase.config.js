// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvlA0waq173BcwUFTBuj8oJ734HYCLhjs",
  authDomain: "the-chefs-pantry-client.firebaseapp.com",
  projectId: "the-chefs-pantry-client",
  storageBucket: "the-chefs-pantry-client.appspot.com",
  messagingSenderId: "110647572471",
  appId: "1:110647572471:web:7f866b3c2f5c910e1ca0f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
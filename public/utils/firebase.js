import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider
} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBLO8lP3V9FPXS7JDnDOanupUe7eUSvfHc",
  authDomain: "verido-167e7.firebaseapp.com",
  projectId: "verido-167e7",
  storageBucket: "verido-167e7.appspot.com",
  messagingSenderId: "53676460299",
  appId: "1:53676460299:web:5a4bd35c6bdccc67a1ba0e",
  measurementId: "G-00F0GCKWWL"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();


googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithFacebookPopup = () => 
  signInWithPopup(auth, facebookProvider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    console.log('accessToken', accessToken)

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
  
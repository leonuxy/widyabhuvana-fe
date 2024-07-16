// Import the Firebase SDK
import {initializeApp} from '@firebase/app';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from '@firebase/auth';

// Initialize Firebase with your project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5ZpeG87jFAvVvVz1hNbw8YU7IgyY7Tyg",
    authDomain: "widyabhuvana.firebaseapp.com",
    projectId: "widyabhuvana",
    storageBucket: "widyabhuvana.appspot.com",
    messagingSenderId: "1067203953420",
    appId: "1:1067203953420:web:e09b76f5b6a012fb607f29",
    measurementId: "G-5WPMHBZQGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firebase Authentication object
const auth = getAuth(app);

// Export the auth object for use in other components
export const useFirebase = () => ({
    auth,
    createUserWithEmailAndPassword, // Export the function
    signInWithEmailAndPassword,
});
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAid-OiYSAFAoCJfDAmEvh-Tvl62eBbCEA",
  authDomain: "family-ties-77e63.firebaseapp.com",
  databaseURL: "https://family-ties-77e63.firebaseio.com",
  storageBucket: "family-ties-77e63.appspot.com",
  messagingSenderId: "914101449562"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

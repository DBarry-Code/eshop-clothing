import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDc_v1tHR2gm8lM8JavVQRiSWKbCdvonTA",
  authDomain: "eshop-clothing-2de55.firebaseapp.com",
  projectId: "eshop-clothing-2de55",
  storageBucket: "eshop-clothing-2de55.appspot.com",
  messagingSenderId: "891181681834",
  appId: "1:891181681834:web:af006c43f33a91689154d3",
  measurementId: "G-8DEQTVBN3Q",
};

export const creatUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

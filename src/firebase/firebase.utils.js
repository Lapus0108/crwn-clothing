import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBEp8CxoQjY2UpMCKxLt8aNkDhvX1Pc6k4',
  authDomain: 'crwn-db-35ef6.firebaseapp.com',
  databaseURL: 'https://crwn-db-35ef6.firebaseio.com',
  projectId: 'crwn-db-35ef6',
  storageBucket: 'crwn-db-35ef6.appspot.com',
  messagingSenderId: '549060517866',
  appId: '1:549060517866:web:ae73efc8739ab86497dc93',
  measurementId: 'G-MD0D9WB9JQ',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

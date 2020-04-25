import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// firestore
//   .collection('users')
//   .doc('cm6xuWZJXWe0ib2sR0vz')
//   .collection('cartItems')
//   .doc('5aR4MPYtS10z6jklJCem');

firestore.doc('/users/cm6xuWZJXWe0ib2sR0vz/cartItems/5aR4MPYtS10z6jklJCem');
firestore.collection('/users/cm6xuWZJXWe0ib2sR0vz/cartItems');

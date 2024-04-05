// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from 'firebase/auth';
// import app from './firebase';

// const auth = getAuth(app);

// export const signUp = (email, password) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       const user = userCredential.user;
//       console.log('User registered:', user);
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error('Registration error:', errorCode, errorMessage);
//     });
// };

// export const signIn = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       const user = userCredential.user;
//       console.log('User logged in:', user);
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error('Login error:', errorCode, errorMessage);
//     });
// };

// export const signOutUser = () => {
//   signOut(auth)
//     .then(() => {
//       console.log('User logged out');
//     })
//     .catch(error => {
//       console.error('Logout error:', error);
//     });
// };

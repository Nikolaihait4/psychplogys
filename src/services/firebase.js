import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAXcGyiED5-rmv2I-gIY2WKgRWYCe_nqn4',
  authDomain: 'psychologys-5d5cd.firebaseapp.com',
  projectId: 'psychologys-5d5cd',
  storageBucket: 'psychologys-5d5cd.appspot.com',
  messagingSenderId: '1017210969458',
  appId: '1:1017210969458:web:e96731788c0856e4c651eb',
  measurementId: 'G-VGCFLD4SWV',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

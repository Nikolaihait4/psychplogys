import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import auth from './firebase';

const useAuth = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setAuthUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log('Success'))
      .catch(e => console.error('Error signing out:', e));
  };

  return { authUser, userSignOut };
};

export default useAuth;

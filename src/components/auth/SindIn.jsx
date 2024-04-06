import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from 'services/firebase';

const SingIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  function login(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        setError('');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        console.log(error);
        setError("Sorry, couldn'n find your account");
      });
  }

  return (
    <div>
      <form>
        <h2>Log in</h2>
        <input
          placeholder="Please enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
        />
        <input
          placeholder="Please enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />

        <button onClick={login}>Login</button>
        {error ? <p style={{ color: 'red' }}>{error}</p> : ''}
      </form>
    </div>
  );
};

export default SingIn;

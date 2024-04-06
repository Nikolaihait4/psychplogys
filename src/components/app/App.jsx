import React, { useState, useEffect } from 'react';
import { fetchPsychologists } from '../../services/api';
import Psychologist from 'components/psychologist/Psychologist';
// import AuthForm from 'components/authForm/AuthForm';
import SingUp from 'components/auth/SingUp';
import SingIn from 'components/auth/SindIn';
import AuthDetails from 'components/auth/AuthDetails';

export const App = () => {
  const [psychologists, setPsychologists] = useState([]);

  useEffect(() => {
    fetchPsychologists()
      .then(data => {
        if (data) {
          setPsychologists(data);
        } else {
          console.log('Произошла ошибка при загрузке данных о психологах');
        }
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных о психологах:', error);
      });
  }, []);

  return (
    <div>
      <SingUp />
      <SingIn />
      <AuthDetails />
      {psychologists.map(psychologist => (
        <Psychologist key={psychologist.id} psychologist={psychologist} />
      ))}
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { fetchPsychologists } from '../../services/api';
import Psychologist from 'components/psychologist/Psychologist';
import AuthForm from 'components/authForm/AuthForm';
import SingUp from 'components/auth/SingUp';

export const App = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  // // Функция для изменения состояния авторизации
  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // // Функция для выхода из системы
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };

  return (
    <div>
      {/* {!isLoggedIn && <AuthForm onLogin={handleLogin} />} */}
      <SingUp />
      {psychologists.map(psychologist => (
        <Psychologist key={psychologist.id} psychologist={psychologist} />
      ))}

      {/* {isLoggedIn && <button onClick={handleLogout}>Logout</button>} */}
    </div>
  );
};

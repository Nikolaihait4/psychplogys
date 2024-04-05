import {
  getDatabase,
  ref,
  push,
  onValue,
  update,
  remove,
} from 'firebase/database';
import app from './firebaseConfig';

const database = getDatabase(app);

// Додавання нового психолога в базу даних
export const addPsychologist = psychologistData => {
  const psychologistsRef = ref(database, 'psychologists');
  push(psychologistsRef, psychologistData);
};

// Отримання списку психологів з бази даних
export const getPsychologists = callback => {
  const psychologistsRef = ref(database, 'psychologists');
  onValue(psychologistsRef, snapshot => {
    const psychologists = [];
    snapshot.forEach(childSnapshot => {
      psychologists.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
      });
    });
    callback(psychologists);
  });
};

// Додавання психолога до обраних користувачем
export const addToFavorites = (userId, psychologistId) => {
  const userFavoritesRef = ref(database, `users/${userId}/favorites`);
  update(userFavoritesRef, { [psychologistId]: true });
};

// Видалення психолога з обраних користувачем
export const removeFromFavorites = (userId, psychologistId) => {
  const userFavoritesRef = ref(
    database,
    `users/${userId}/favorites/${psychologistId}`
  );
  remove(userFavoritesRef);
};

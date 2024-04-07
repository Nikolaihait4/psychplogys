import React from 'react';
import { useSelector } from 'react-redux';
import Psychologist from '../../components/psychologist/Psychologist';

const FavoritePsychologists = () => {
  const favoritePsychologists = useSelector(state => state.favorites.favorites);

  return (
    <div>
      <h2>Favorite Psychologists</h2>
      {favoritePsychologists.map(psychologist => (
        <Psychologist
          key={psychologist.id}
          psychologist={psychologist}
          isFavorite={true} // Установим значение isFavorite как true, потому что это страница избранных
        />
      ))}
    </div>
  );
};

export default FavoritePsychologists;

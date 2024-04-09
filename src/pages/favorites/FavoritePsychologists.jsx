// pages/FavoritePsychologists.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Psychologist from '../../components/psychologist/Psychologist';
import { removeFromFavorites } from '../../redux/favoritesSlice';

const FavoritePsychologists = () => {
  const dispatch = useDispatch();
  const favoritePsychologists = useSelector(state => state.favorites.favorites);

  // Функция для удаления психолога из избранного
  const handleRemoveFromFavorite = psychologist => {
    dispatch(removeFromFavorites(psychologist));
  };

  return (
    <div>
      <h2>Favorite Psychologists</h2>
      {favoritePsychologists.map(psychologist => (
        <Psychologist
          key={psychologist.id}
          psychologist={psychologist}
          isFavorite={true}
          onRemoveFromFavorite={() => handleRemoveFromFavorite(psychologist)}
        />
      ))}
    </div>
  );
};

export default FavoritePsychologists;

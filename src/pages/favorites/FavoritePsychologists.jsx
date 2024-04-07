// pages/FavoritePsychologists.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  initializeFavorites,
  toggleFavorite,
} from '../../redux/favoritesSlice';
import Psychologist from 'components/psychologist/Psychologist';
import { v4 as uuidv4 } from 'uuid';

const FavoritePsychologists = () => {
  const dispatch = useDispatch();
  const favoritePsychologists = useSelector(state => state.favorites.favorites);

  useEffect(() => {
    dispatch(initializeFavorites());
  }, [dispatch]);

  const handleToggleFavorite = psychologist => {
    dispatch(toggleFavorite(psychologist));
  };

  return (
    <div>
      <h2>Favorite Psychologists</h2>
      {favoritePsychologists.map(psychologist => (
        <Psychologist
          key={uuidv4()}
          psychologist={psychologist}
          onToggleFavorite={() => handleToggleFavorite(psychologist)}
        />
      ))}
    </div>
  );
};

export default FavoritePsychologists;

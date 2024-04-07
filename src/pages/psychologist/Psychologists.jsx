// pages/Psychologists.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Psychologist from '../../components/psychologist/Psychologist';
import { fetchPsychologists } from '../../services/api';
import {
  fetchPsychologistsStart,
  fetchPsychologistsSuccess,
  fetchPsychologistsFailure,
} from '../../redux/psychologistsSlice';
import { toggleFavorite } from '../../redux/favoritesSlice';
import { v4 as uuidv4 } from 'uuid';
import FavoritePsychologists from 'pages/favorites/FavoritePsychologists';

const Psychologists = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(state => state.psychologists.psychologists);
  const isLoading = useSelector(state => state.psychologists.isLoading);
  const error = useSelector(state => state.psychologists.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchPsychologistsStart());
        const data = await fetchPsychologists();
        dispatch(fetchPsychologistsSuccess(data));
      } catch (error) {
        console.error('Error fetching psychologists:', error);
        dispatch(fetchPsychologistsFailure(error));
      }
    };

    fetchData();
  }, [dispatch]);

  const handleToggleFavorite = psychologist => {
    const isFavorite = FavoritePsychologists.some(
      fav => fav.id === psychologist.id
    );

    if (isFavorite) {
      dispatch(toggleFavorite(psychologist)); // Удаляем из избранных, если уже был добавлен
    } else {
      dispatch(toggleFavorite(psychologist)); // Добавляем в избранные, если не был добавлен ранее
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {psychologists.map(psychologist => (
        <Psychologist
          key={uuidv4()}
          psychologist={psychologist}
          onToggleFavorite={() => handleToggleFavorite(psychologist)}
        />
      ))}
    </div>
  );
};

export default Psychologists;

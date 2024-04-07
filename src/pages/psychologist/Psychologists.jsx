// pages/Psychologists.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Psychologist from '../../components/psychologist/Psychologist';
import { fetchPsychologists } from '../../services/api';
import {
  fetchPsychologistsStart,
  fetchPsychologistsSuccess,
  fetchPsychologistsFailure,
} from '../../redux/psychologistsSlice';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favoritesSlice';
import { v4 as uuidv4 } from 'uuid';

const Psychologists = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(state => state.psychologists.psychologists);
  const isLoading = useSelector(state => state.psychologists.isLoading);
  const error = useSelector(state => state.psychologists.error);
  const favoritePsychologists = useSelector(state => state.favorites.favorites);

  // Создаем словарь, где ключами будут id психологов, а значениями - true/false в зависимости от того, добавлены они в избранное или нет
  const [favoriteMap, setFavoriteMap] = useState({});

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

  // При изменении списка избранных психологов обновляем favoriteMap
  useEffect(() => {
    const newFavoriteMap = {};
    favoritePsychologists.forEach(psychologist => {
      newFavoriteMap[psychologist.id] = true;
    });
    setFavoriteMap(newFavoriteMap);
  }, [favoritePsychologists]);

  // Функция для добавления психолога в избранное
  const handleAddToFavorite = psychologist => {
    dispatch(addToFavorites(psychologist));
    setFavoriteMap(prevMap => ({
      ...prevMap,
      [psychologist.id]: true,
    }));
  };

  // Функция для удаления психолога из избранного
  const handleRemoveFromFavorite = psychologist => {
    dispatch(removeFromFavorites(psychologist));
    setFavoriteMap(prevMap => ({
      ...prevMap,
      [psychologist.id]: false,
    }));
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
          isFavorite={favoriteMap[psychologist.id]} // Передаем isFavorite
          onAddToFavorite={() => handleAddToFavorite(psychologist)} // Передаем функцию для добавления в избранное
          onRemoveFromFavorite={() => handleRemoveFromFavorite(psychologist)} // Передаем функцию для удаления из избранного
        />
      ))}
    </div>
  );
};

export default Psychologists;

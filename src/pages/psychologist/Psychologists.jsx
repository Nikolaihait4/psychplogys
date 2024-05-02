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

  const [favoriteMap, setFavoriteMap] = useState({});
  const [sortCriteria, setSortCriteria] = useState('name'); // Default sort criteria

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

  useEffect(() => {
    const newFavoriteMap = {};
    favoritePsychologists.forEach(psychologist => {
      newFavoriteMap[psychologist.id] = true;
    });
    setFavoriteMap(newFavoriteMap);
  }, [favoritePsychologists]);

  const handleAddToFavorite = psychologist => {
    dispatch(addToFavorites(psychologist));
    setFavoriteMap(prevMap => ({
      ...prevMap,
      [psychologist.id]: true,
    }));
  };

  const handleRemoveFromFavorite = psychologist => {
    dispatch(removeFromFavorites(psychologist));
    setFavoriteMap(prevMap => ({
      ...prevMap,
      [psychologist.id]: false,
    }));
  };

  const handleSortChange = event => {
    setSortCriteria(event.target.value);
  };

  const sortPsychologists = () => {
    return psychologists.slice().sort((a, b) => {
      if (a[sortCriteria] < b[sortCriteria]) return -1;
      if (a[sortCriteria] > b[sortCriteria]) return 1;
      return 0;
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortCriteria} onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="price_per_hour">Price per hour</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      {sortPsychologists().map(psychologist => (
        <Psychologist
          key={uuidv4()}
          psychologist={psychologist}
          isFavorite={favoriteMap[psychologist.id]}
          onAddToFavorite={() => handleAddToFavorite(psychologist)}
          onRemoveFromFavorite={() => handleRemoveFromFavorite(psychologist)}
        />
      ))}
    </div>
  );
};

export default Psychologists;

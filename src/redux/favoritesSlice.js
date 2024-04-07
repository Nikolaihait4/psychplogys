// redux/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const existingIndex = state.favorites.findIndex(
        psychologist => psychologist.id === action.payload.id
      );
      if (existingIndex !== -1) {
        // Если психолог уже в избранном, удаляем его
        state.favorites.splice(existingIndex, 1);
      } else {
        // Если психолога нет в избранном, добавляем его
        state.favorites.push(action.payload);
      }
      // Обновляем данные в локальном хранилище
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    initializeFavorites: state => {
      const favorites = localStorage.getItem('favorites');
      if (favorites) {
        state.favorites = JSON.parse(favorites);
      }
    },
  },
});

export const { toggleFavorite, initializeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

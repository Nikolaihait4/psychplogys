// redux/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload.id
      );
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    initializeFavorites(state) {
      const favorites = localStorage.getItem('favorites');
      if (favorites) {
        state.favorites = JSON.parse(favorites);
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites, initializeFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;

// redux/favoritesSelectors.js
import { createSelector } from '@reduxjs/toolkit';

const selectFavorites = state => state.favorites;

export const selectFavoriteIds = createSelector(selectFavorites, favorites =>
  favorites.map(favorite => favorite.id)
);

// redux/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favoritesReducer, { initializeFavorites } from './favoritesSlice';
import psychologistsReducer from './psychologistsSlice';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  psychologists: psychologistsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(initializeFavorites());

export default store;

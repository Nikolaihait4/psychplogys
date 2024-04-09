// redux/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favoritesReducer, { initializeFavorites } from './favoritesSlice';
import psychologistsReducer from './psychologistsSlice';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  psychologists: psychologistsReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(initializeFavorites());

export default store;

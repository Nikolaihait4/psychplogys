// import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import Psychologist from 'pages/psychologist/Psychologists';
import FavoritePsychologists from 'pages/favorites/FavoritePsychologists';

// import { LoaderComponent } from '../../helpers/Loader';
// const Home = lazy(() => import('pages/Home/Home'));
// const Psychologists = lazy(() => import('pages/psychologist/Psychologists'));
// const Favorites = lazy(() => import('pages/favorites/Favorites'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/psychologyst" element={<Psychologist />} />
        <Route path="/favorites" element={<FavoritePsychologists />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

// SharedLayout.jsx
import React from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import useAuth from '../../services/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { openSignIn, openSignUp, selectAuthState } from '../../redux/authSlice';
import SignIn from '../auth/SindIn';
import SignUp from '../auth/SingUp';

const SharedLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { authUser, userSignOut } = useAuth();
  const { showSignIn, showSignUp } = useSelector(selectAuthState);
  const dispatch = useDispatch();

  const handleCatalogClick = () => {
    navigate('/psychologyst', { replace: true });
  };

  const handleSignInClick = () => {
    dispatch(openSignIn());
  };

  const handleSignUpClick = () => {
    dispatch(openSignUp());
  };

  return (
    <div className={styles.navContainer}>
      <header className={styles.navbar}>
        <NavLink
          to="/"
          className={location.pathname === '/' ? styles.active : styles.navLink}
        >
          Home
        </NavLink>
        <NavLink
          to="/psychologyst"
          className={
            location.pathname === '/psychologyst'
              ? styles.active
              : styles.navLink
          }
          onClick={handleCatalogClick}
        >
          Psychologists
        </NavLink>
        {authUser && (
          <NavLink
            to="/favorites"
            className={
              location.pathname === '/favorites'
                ? styles.active
                : styles.navLink
            }
          >
            Favorites
          </NavLink>
        )}
        {authUser ? (
          <button onClick={userSignOut}>Sign Out</button>
        ) : (
          <div>
            <button onClick={handleSignInClick}>Sign In</button>
            <button onClick={handleSignUpClick}>Sign Up</button>
          </div>
        )}
      </header>
      <Outlet />
      {!authUser && (
        <div>
          {showSignIn && <SignIn />}
          {showSignUp && <SignUp />}
        </div>
      )}
    </div>
  );
};

export default SharedLayout;

// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    showSignIn: false,
    showSignUp: false,
  },
  reducers: {
    openSignIn: state => {
      state.showSignIn = true;
      state.showSignUp = false;
    },
    openSignUp: state => {
      state.showSignIn = false;
      state.showSignUp = true;
    },
    closeForms: state => {
      state.showSignIn = false;
      state.showSignUp = false;
    },
  },
});

export const { openSignIn, openSignUp, closeForms } = authSlice.actions;

export const selectAuthState = state => state.auth;

export default authSlice.reducer;

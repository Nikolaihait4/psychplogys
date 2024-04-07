// redux/psychologistsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  psychologists: [],
  isLoading: false,
  error: null,
};

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState,
  reducers: {
    fetchPsychologistsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchPsychologistsSuccess(state, action) {
      state.isLoading = false;
      state.psychologists = action.payload;
    },
    fetchPsychologistsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPsychologistsStart,
  fetchPsychologistsSuccess,
  fetchPsychologistsFailure,
} = psychologistsSlice.actions;

export default psychologistsSlice.reducer;

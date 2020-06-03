import { configureStore } from '@reduxjs/toolkit';
import pageReducer from '../stores/pageSlice';
import jokeReducer from '../stores/jokeSlice';

export default configureStore({
  reducer: {
    page: pageReducer,
    joke: jokeReducer,
  },
});

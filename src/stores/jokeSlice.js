import { createSlice } from '@reduxjs/toolkit';

export const jokeSlice = createSlice({
    name: 'jokeStore',
    initialState: {
      joke: "",
    },
    reducers: {
      setJoke: (state, action) => {
            console.log("action", action);
            state.joke = action.payload.joke;
      },
    }
  });

export const { setJoke } = jokeSlice.actions;
export const selectJoke = state => state.joke.joke;
export default jokeSlice.reducer;

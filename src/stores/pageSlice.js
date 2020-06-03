import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
    name: 'pageStore',
    initialState: {
      page: "home",
    },
    reducers: {
      setPage: (state, action) => {
          console.log("action", action);
            state.page = action.payload.page;
      },
    }
  });

export const { setPage } = pageSlice.actions;
export const selectPage = state => state.page.page;
export default pageSlice.reducer;

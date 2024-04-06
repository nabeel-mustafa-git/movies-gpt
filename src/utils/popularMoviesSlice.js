import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: null,
  reducers: {
    addPopularMovies: (state, action) => {
      return action.payload;
    },
    removePopularMovies: () => {
      return null;
    },
  },
});

export const { addPopularMovies, removePopularMovies } = popularMoviesSlice.actions;

export default popularMoviesSlice.reducer;

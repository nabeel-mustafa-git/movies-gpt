import { createSlice } from "@reduxjs/toolkit";

const heroMovieSlice = createSlice({
  name: "mainmovie",
  initialState: null,
  reducers: {
    addMainMovie: (state, action) => {
      return action.payload;
    },
    removeMainMovie: (state, action) => {
      return null;
    },
  },
});

export const { addMainMovie, removeMainMovie } = heroMovieSlice.actions;

export default heroMovieSlice.reducer;

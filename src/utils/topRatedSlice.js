import { createSlice } from "@reduxjs/toolkit";

const topRatedSlice = createSlice({
  name: "topRatedMovies",
  initialState: null,
  reducers: {
    addTopRatedMovies: (state, action) => {
      return action.payload;
    },
    removeTopRatedMovies: () => {
      return null;
    },
  },
});

export const { addTopRatedMovies, removeTopRatedMovies } = topRatedSlice.actions;

export default topRatedSlice.reducer;

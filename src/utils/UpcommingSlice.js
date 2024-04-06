import { createSlice } from "@reduxjs/toolkit";

const upcommingSlice = createSlice({
  name: "upcomming",
  initialState: null,
  reducers: {
    addUpcommingMovies: (state, action) => {
      return action.payload;
    },
    removeUpcommingMovies: () => {
      return null;
    },
  },
});

export const { addUpcommingMovies, removeUpcommingMovies } = upcommingSlice.actions;

export default upcommingSlice.reducer;

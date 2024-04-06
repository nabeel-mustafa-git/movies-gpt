import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import mainMovieReducer from "./heroMovieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    mainmovie: mainMovieReducer,
  },
});

export default appStore;

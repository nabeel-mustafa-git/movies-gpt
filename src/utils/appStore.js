import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import mainMovieReducer from "./heroMovieSlice";
import popularMoviesReducer from "./popularMoviesSlice";
import topRatedMoviesReducer from "./topRatedSlice";
import upcommingReducer from "./UpcommingSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    mainmovie: mainMovieReducer,
    popularMovies: popularMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    upcomming: upcommingReducer,
  },
});

export default appStore;

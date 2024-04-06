import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { addMainMovie } from "../utils/heroMovieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", api_options);

    const data = await response.json();
    dispatch(addNowPlayingMovies(data));
    dispatch(addMainMovie(data.results[Math.floor(Math.random() * 11)]));
  };

  useEffect(() => {
    try {
      getNowPlayingMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);
};

export default useNowPlayingMovies;

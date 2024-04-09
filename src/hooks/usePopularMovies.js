import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/popularMoviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const res = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=2", api_options);
      const data = await res.json();
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
};

export default usePopularMovies;

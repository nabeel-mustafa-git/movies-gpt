import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/topRatedSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", api_options);
      const data = await res.json();
      dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useTopRated;

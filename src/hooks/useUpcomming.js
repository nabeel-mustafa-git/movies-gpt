import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcommingMovies } from "../utils/UpcommingSlice";

const useUpcomming = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", api_options);
    const data = await res.json();
    dispatch(addUpcommingMovies(data.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useUpcomming;

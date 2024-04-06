import { useEffect, useState } from "react";
import { api_options } from "../utils/constants";

const useFetchSingleMovieData = (movieId) => {
  const [detail, setDetail] = useState(null);

  const getData = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US", api_options);
    const data = await res.json();
    setDetail(data);
  };

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return detail;
};

export default useFetchSingleMovieData;

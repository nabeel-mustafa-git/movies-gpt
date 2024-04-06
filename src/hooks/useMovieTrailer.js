import { useEffect, useState } from "react";
import { api_options } from "../utils/constants";

const useMovieTrailer = (videoId) => {
  const [trailer, setTrailer] = useState();

  const getMovieVideo = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/" + videoId + "/videos?language=en-US", api_options);

    const recievedData = await result.json();

    const filtered = recievedData.results.filter((item) => item.type === "Trailer");
    setTrailer(filtered ? filtered[0] : recievedData.results[0]);
  };

  useEffect(() => {
    try {
      getMovieVideo();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return trailer;
};

export default useMovieTrailer;

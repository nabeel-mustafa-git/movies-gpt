import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies);
  const popular = useSelector((store) => store.popularMovies);
  const topRated = useSelector((store) => store.topRatedMovies);
  const upcoming = useSelector((store) => store.upcomming);

  return (
    <div className="flex flex-col gap-8 p-10 max-md:p-4 md:mt-[-20px] relative z-50">
      {nowPlaying.nowPlayingMovies !== null ? <MovieList title={"Now Playing Movies"} movies={nowPlaying.nowPlayingMovies.results} /> : <></>}
      {topRated !== null ? <MovieList title={"Top Rated"} movies={topRated} /> : <></>}
      {popular !== null ? <MovieList title={"Popular"} movies={popular} /> : <></>}
      {upcoming !== null ? <MovieList title={"This Year"} movies={upcoming} /> : <></>}
    </div>
  );
};

export default SecondaryContainer;

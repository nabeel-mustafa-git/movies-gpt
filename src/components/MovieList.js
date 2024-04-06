import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   console.log(movies[1].poster_path);
  return (
    <div className="">
      <h2 className="text-2xl font-semibold pb-4 text-white">{title}</h2>
      <div className="flex gap-3 overflow-x-scroll scrollbar pb-3">
        {movies.map((movie) => (
          <MovieCard poster={movie.poster_path} altText={movie.title} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

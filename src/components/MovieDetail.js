import { useParams } from "react-router-dom";
import Nav from "./Nav";
import useFetchSingleMovieData from "../hooks/useFetchSingleMovieData";
import { ORIGINAL_IMG_URL } from "../utils/constants";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useState } from "react";
import Spinner from "./Spinner";

const MovieDetail = () => {
  const { id } = useParams();

  const movie = useFetchSingleMovieData(id);
  const trailer = useMovieTrailer(id);

  return (
    <>
      {movie ? <></> : <Spinner up="false" />}
      <Nav route={"/movie/" + id} />
      {movie && (
        <div>
          <div>
            <img src={ORIGINAL_IMG_URL + movie.backdrop_path} alt={movie.title} className="w-full h-auto object-cover lg:h-[500px]" />
          </div>
          <div className={`bg-black -mt-[100px] max-sm:-mt-[60px] lg:px-[20%] md:px-[15%] px-5 pb-20`}>
            <div className="text-white flex gap-4 max-sm:flex-col max-sm:items-center">
              <img src={ORIGINAL_IMG_URL + movie.poster_path} alt={movie.title} className="w-[300px] max-md:w-[200px] rounded-md" />
              <div className="flex flex-col max-sm:items-center md:pt-8">
                <h2 className="relative text-4xl lg:text-5xl max-sm:text-3xl font-medium text-black max-sm:text-center">
                  {movie.title}
                  <p className="absolute top-0 left-0 text-white mt-[3px]">{movie.title}</p>
                </h2>
                <div className="flex gap-1 md:pt-10 lg:mt-12 mt-5 w-[300px] overflow-x-scroll scrollbar pb-2">
                  <span className="text-gray-400">Genres: </span>
                  {movie.genres &&
                    movie.genres.map((item) => (
                      <p key={item.id} className="border border-gray-500 px-2 rounded-md bg-black text-nowrap">
                        {item.name}
                      </p>
                    ))}
                </div>
                <p className="">
                  <span className="text-gray-400">Status: </span>
                  {movie.status}
                </p>
                <p>
                  <span className="text-gray-400">Release date: </span>
                  {movie.release_date && movie.release_date}
                </p>
                <p className="">
                  <span className="text-gray-400">Duration: </span>
                  {movie.runtime} minutes
                </p>
                <button
                  onClick={() => {
                    alert("Oops! We just recommend movies. You can watch it somewhere else :)");
                  }}
                  className="py-1 px-5 bgrd-red rounded-sm flex items-center gap-1 hover:bg-red-800 duration-150 font-light w-fit mt-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    />
                  </svg>
                  Play
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-black lg:px-[20%] md:px-[15%] px-5 pb-16 text-white">
            <h2 className="text-3xl font-medium max-sm:text-2xl">Overview</h2>
            <div className="flex items-end py-2">
              <div className="w-[100px] h-[7px] bg-red-600"></div>
              <div className="w-full h-[2px] bg-red-600"></div>
            </div>
            <p className="text-light text-gray-400 max-sm:text-sm pb-5">{movie.overview}</p>
            <p className="max-sm:text-sm">
              <span className="text-gray-400">
                <span className="text-red-600">_</span>Tagline:{" "}
              </span>
              {movie.tagline}
            </p>
            <p className="max-sm:text-sm">
              <span className="text-gray-400">
                <span className="text-red-600">_</span>Language:{" "}
              </span>
              {movie.original_language}
            </p>
            <p className="max-sm:text-sm">
              <span className="text-gray-400">
                <span className="text-red-600">_</span>Popularity:{" "}
              </span>
              {Math.round(movie.popularity)}
            </p>
            <p className="max-sm:text-sm">
              <span className="text-gray-400">
                <span className="text-red-600">_</span>Votes:{" "}
              </span>
              {movie.vote_count}
            </p>
          </div>
        </div>
      )}
      {trailer && (
        <div className="bg-black lg:px-[20%] md:px-[15%] px-5 pb-20 text-white">
          <h2 className="text-3xl font-medium max-sm:text-2xl">Video</h2>
          <div className="flex items-end py-2">
            <div className="w-[100px] h-[7px] bg-red-600"></div>
            <div className="w-full h-[2px] bg-red-600"></div>
          </div>
          <p className="max-sm:text-sm">
            <span className="text-gray-400">
              <span className="text-red-600">_</span>Name:{" "}
            </span>
            {trailer.name}
          </p>
          <p className="max-sm:text-sm">
            <span className="text-gray-400">
              <span className="text-red-600">_</span>Original site:{" "}
            </span>
            {trailer.site}
          </p>
          <iframe
            src={`https://www.youtube.com/embed/${trailer?.key}?si=mJdBTGXnPxjRcba7`}
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            draggable="false"
            className="w-full aspect-video border-2 mt-5 border-red-600 rounded-lg overflow-hidden"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default MovieDetail;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import HeroMovieData from "./HeroMovieData";

const MainContainer = () => {
  const mainMovie = useSelector((store) => store.mainmovie);

  if (!mainMovie) return <div className="w-full h-svh"></div>;

  return (
    <div>
      <VideoBackground videoId={mainMovie.id} />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-[-100%] from-black flex flex-col justify-end text-white p-20 max-lg:p-12 max-md:p-8 max-sm:p-4">
        <HeroMovieData movieId={mainMovie.id} />
      </div>
    </div>
  );
};

export default MainContainer;

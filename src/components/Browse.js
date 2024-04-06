import Nav from "./Nav";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomming from "../hooks/useUpcomming";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomming();

  return (
    <div className="bg-black text-white">
      <Nav />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

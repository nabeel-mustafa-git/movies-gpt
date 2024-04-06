import { wait } from "@testing-library/user-event/dist/utils";
import Nav from "./Nav";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="bg-black text-white">
      <Nav />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

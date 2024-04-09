import Nav from "./Nav";
import { useRef, useState } from "react";
import { MOVIES_BG_IMAGE, api_options } from "../utils/constants";
import MovieCard from "./MovieCard";

const Search = () => {
  const [movies, setMovies] = useState(null);
  const [string, setString] = useState("");
  const [page, setPage] = useState(2);
  const query = useRef();

  const getData = async (query) => {
    const res = await fetch("https://api.themoviedb.org/3/search/movie?query=" + query + "&include_adult=false&language=en-US&page=1", api_options);
    const data = await res.json();
    setMovies(data.results);
    setString(query);
    setPage(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const str = query.current.value.replaceAll(" ", "%20");
    getData(str);
  };

  const handleLoadMore = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + string + "&include_adult=false&language=en-US&page=" + page,
      api_options
    );
    const data = await res.json();
    setMovies(movies.concat(data.results));
    setPage(page + 1);
  };

  return (
    <>
      <Nav route={"/search"} />

      <div className="relative w-full min-h-svh bg-black bg-opacity-85 text-white">
        <img className="fixed top-0 left-0 w-full h-full object-cover -z-10" src={MOVIES_BG_IMAGE} />
        <div className={`w-full h-full flex flex-col items-center gap-5 justify-center pt-[100px] p-5`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent py-2 title-font tracking-tighter px-3 max-sm:text-2xl">
            Looking for <span className="font-['poppins'] text-6xl max-sm:text-4xl">Specific</span> movie?
          </h2>
          <p className="font-light text-center px-5 pb-5 text-gray-400 md:w-7/12 max-sm:text-sm">
            Just type the name or part of the name of movie that you are looking for and we will get movies details matching your search.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2 w-7/12 max-sm:w-11/12">
            <input
              type="text"
              placeholder="Enter movie name here"
              ref={query}
              className="w-10/12 bg-gray-500 text-gray-100 px-4 py-1 outline-none rounded-md placeholder-gray-300 border-r-2 border-red-600"
            />
            <button type="submit" className="border border-l-2 rounded-md border-red-600 px-3 hover:bg-red-600 hover:text-black">
              Search
            </button>
          </form>
        </div>
        {movies && (
          <>
            <div className="flex flex-wrap gap-2 gap-y-5 justify-around w-10/12 m-auto pt-10 pb-10">
              {movies.map((movie) => (
                <MovieCard poster={movie.poster_path} altText={movie.title} key={movie.id} id={movie.id} />
              ))}
            </div>
            <button onClick={handleLoadMore} className="relative left-[50%] translate-x-[-50%] bgrd-red py-1 px-3 border rounded-md mb-20">
              Load more
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Search;

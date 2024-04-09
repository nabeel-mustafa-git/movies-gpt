import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
import { useRef, useState } from "react";
import { MOVIES_BG_IMAGE, api_options } from "../utils/constants";
import { gimini_key } from "../utils/keys";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

const GptSearch = () => {
  const [suggest, setSuggest] = useState(null);
  const [movies, setMovies] = useState(null);
  const [loader, setLoader] = useState(false);
  const query = useRef();
  const genAI = new GoogleGenerativeAI(gimini_key);

  async function run() {
    try {
      setLoader(true);

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt =
        "Play role of a movie suggesting ai bot and give response to user for this user query '" +
        query.current.value +
        "'. If the query is related to movies then give names of 10 to 20 movies that are separated by comma like this 'movie name 1, movie name 2 , movie name 3, movie name 4, movie name 5' and if the query is not related movies just return this exact same text 'Failure'. give no other extra response then two, give either comma separated names of movies or this text 'Failure' in case of unrelated query";

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      if (text === "Failure") {
        setSuggest("Failure");
      } else {
        const arr = text.split(", ");
        setSuggest(arr);
        const promises = arr.map((movie) => getData(movie));
        const finalResult = await Promise.all(promises);
        setMovies(finalResult);
      }

      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    run();
  };

  const getData = async (movie) => {
    try {
      const res = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", api_options);
      const data = await res.json();
      return data.results;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative w-full min-h-svh bg-black bg-opacity-85 text-white pb-10">
      {loader === true ? <Spinner /> : ""}

      <img className="fixed top-0 left-0 w-full h-full object-cover -z-10" src={MOVIES_BG_IMAGE} />
      <div className={`w-full h-full flex flex-col items-center gap-5 justify-center pt-[100px] p-5`}>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent py-2 title-font tracking-tighter px-3 max-sm:text-2xl">
          Get movie <span className="font-['poppins'] text-6xl max-sm:text-4xl">Suggestion</span> from AI
        </h2>
        <p className="font-light text-center px-5 pb-5 text-gray-400 md:w-7/12 max-sm:text-sm">
          Unleash the power of <span className="font-normal text-2xl text-orange-400">ai</span> and get movies suggestion according to your interests!
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 w-7/12 max-sm:w-11/12">
          <input
            type="text"
            placeholder="What you would like to watch today?"
            ref={query}
            className="w-10/12 bg-gray-500 text-gray-100 px-4 py-1 outline-none rounded-md placeholder-gray-300 border-r-2 border-red-600"
          />
          <button type="submit" className="border border-l-2 rounded-md border-red-600 px-3 hover:bg-red-600 hover:text-black">
            Search
          </button>
        </form>
      </div>
      {suggest === "Failure" ? (
        <div className="flex justify-center">
          <p className="text-wrap border-b border-red-600">Enter a valid text/query related to movies only!</p>
        </div>
      ) : (
        ""
      )}
      {movies && (
        <div className="flex flex-wrap gap-2 gap-y-5 justify-around w-10/12 max-sm:w-full px-2 m-auto pt-10 pb-10">
          {movies?.map((movie) => (
            <MovieCard poster={movie[0]?.poster_path} altText={movie[0]?.title} key={movie[0]?.id} id={movie[0]?.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GptSearch;

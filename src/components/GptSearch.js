import { useRef } from "react";
import { MOVIES_BG_IMAGE } from "../utils/constants";

const GptSearch = () => {
  const query = useRef();
  const handleSubmit = () => {
    console.log(query.current.value);
  };

  return (
    <div className="relative w-full min-h-svh bg-black bg-opacity-85 text-white">
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
    </div>
  );
};

export default GptSearch;

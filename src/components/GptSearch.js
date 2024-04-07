import { useRef } from "react";

const GptSearch = () => {
  const query = useRef();
  const handleSubmit = () => {
    console.log(query.current.value);
  };

  return (
    <div className="w-full min-h-svh bg-black text-white">
      <div className={`w-full h-full flex justify-center pt-[100px] relative z-[99]`}>
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

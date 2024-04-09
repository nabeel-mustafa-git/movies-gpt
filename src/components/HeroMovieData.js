import { useEffect } from "react";
import useFetchSingleMovieData from "../hooks/useFetchSingleMovieData";
import { Link } from "react-router-dom";

const HeroMovieData = ({ movieId }) => {
  var data = null;
  data = useFetchSingleMovieData(movieId);

  return (
    <div>
      {data === null ? (
        <></>
      ) : (
        <div>
          <h2 className="title-font text-[3rem] font-semibold text-ellipsis text-nowrap overflow-hidden max-sm:text-[2rem]">
            {data?.original_title}
          </h2>
          {/* <p className="font-light text-ellipsis text-nowrap overflow-hidden">{data.tagline ? data.tagline : ""}</p> */}
          <div className="flex gap-2 py-2 flex-wrap max-sm:text-sm">
            {data?.genres.map((item, i) => (
              <p key={i} className="bg-black bg-opacity-50 px-4 py-1 rounded-full border border-gray-700 text-gray-200 title-font">
                {item?.name}
              </p>
            ))}
          </div>
          <p className="font-extralight max-w-[500px] max-sm:text-sm text-gray-200">{data.overview}</p>
          <div className="flex gap-2 py-5">
            <button
              onClick={() => {
                alert("Oops! We just recommend movies. You can watch it somewhere else :)");
              }}
              className="py-1 px-5 bgrd-red rounded-sm flex items-center gap-1 hover:bg-red-800 duration-150 font-light"
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
            <Link to={"/movie/" + movieId}>
              <button className="py-1 px-5 bg-gray-800 border border-gray-400 rounded-sm hover:bg-opacity-50 duration-150 font-light">
                Read more
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroMovieData;

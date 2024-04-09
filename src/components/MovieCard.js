import React from "react";
import { SMALL_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ poster, altText, id }) => {
  return (
    <div>
      {poster && (
        <Link to={"/movie/" + id}>
          <img
            src={SMALL_IMG_URL + poster}
            alt={altText}
            className="rounded-md hover:scale-95 duration-100 ease-in-out  min-w-[200px] max-sm:min-w-[150px]"
          />
        </Link>
      )}
    </div>
  );
};

export default MovieCard;

import React from "react";
import { SMALL_IMG_URL } from "../utils/constants";

const MovieCard = ({ poster, altText }) => {
  return (
    <div>
      <img src={SMALL_IMG_URL + poster} alt={altText} className="rounded-md hover:scale-95 duration-100 ease-in-out min-w-[200px]" />
    </div>
  );
};

export default MovieCard;

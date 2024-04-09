import { tmdb_key } from "./keys";

export const api_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + tmdb_key,
  },
};

export const SMALL_IMG_URL = "https://image.tmdb.org/t/p/w200";

export const ORIGINAL_IMG_URL = "https://image.tmdb.org/t/p/original";
export const MOVIES_BG_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/ca77f965-b83c-4616-93a3-a2f8fabb378c/PK-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

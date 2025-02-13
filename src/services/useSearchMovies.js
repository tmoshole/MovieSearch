import axios from "axios";
import { RAPIDAPI_KEY, RAPIDAPI_HOST } from "@env";

const searchMovies = async (query) => {
  if (!query) return [];

  const options = {
    method: "GET",
    url: "https://imdb236.p.rapidapi.com/imdb/search",
    params: {
      primaryTitle: query,
      primaryTitleAutocomplete: query,
      type: "movie",
      rows: "10",
      sortOrder: "ASC",
      sortField: "id",
    },
    headers: {
      "x-rapidapi-key": RAPIDAPI_KEY,
      "x-rapidapi-host": RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};

export default searchMovies;

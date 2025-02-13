import axios from "axios";
import { RAPIDAPI_KEY, RAPIDAPI_HOST } from "@env";

export const useSearchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(
      `https://imdb236.p.rapidapi.com/imdb/search?q=${searchTerm}`,
      {
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": RAPIDAPI_HOST,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};


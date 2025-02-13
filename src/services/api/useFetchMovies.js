import axios from "axios";
import { RAPIDAPI_KEY, RAPIDAPI_HOST } from "@env";

export const useFetchMovies = async () => {
  try {
    const response = await axios.get(
      "https://imdb236.p.rapidapi.com/imdb/top250-movies",
      {
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": RAPIDAPI_HOST,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

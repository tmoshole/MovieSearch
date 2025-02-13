import axios from "axios";
import { RAPIDAPI_KEY, RAPIDAPI_HOST } from "@env";

const fetchTopMovies = async () => {
  const options = {
    method: "GET",
    url: "https://imdb236.p.rapidapi.com/imdb/top250-movies",
    headers: {
      "x-rapidapi-key": RAPIDAPI_KEY,
      "x-rapidapi-host": RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

export default fetchTopMovies;

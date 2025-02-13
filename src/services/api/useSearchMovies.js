import axios from "axios";
import { RAPIDAPI_KEY, RAPIDAPI_HOST } from "@env";

export const useSearchMovies = async (searchTerm) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://imdb236.p.rapidapi.com/imdb/search',
      params: {
        originalTitle: searchTerm,
        originalTitleAutocomplete: searchTerm,
        type: 'movie',
        sortField: 'id',
      },
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST,
      },
    };
    const response = await axios.request(options);
    
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};



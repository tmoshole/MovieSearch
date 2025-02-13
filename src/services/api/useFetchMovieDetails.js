import axios from "axios";
import { RAPIDAPI_KEY, RAPIDAPI_HOST } from "@env";

export const fetchMovieDetailsAPI = async (movieId) => {
    try {
        const response = await axios.get(`https://imdb236.p.rapidapi.com/imdb/${movieId}`, {
            headers: {
                "x-rapidapi-key": RAPIDAPI_KEY,
                "x-rapidapi-host": RAPIDAPI_HOST,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

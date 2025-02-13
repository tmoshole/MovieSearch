import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useFetchMovies } from "../services/api/useFetchMovies";
import { useSearchMovies } from "../services/api/useSearchMovies";
import { fetchMovieDetailsAPI } from "../services/api/useFetchMovieDetails";

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchDetails",
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await fetchMovieDetailsAPI(movieId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadRandomMovies = createAsyncThunk("movies/loadRandom", useFetchMovies);
export const searchForMovies = createAsyncThunk(
  "movies/search",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await useSearchMovies(searchTerm);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    searchResults: [],
    selectedMovie: null,
    selectedMovieDetails: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRandomMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadRandomMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(loadRandomMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      .addCase(searchForMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchForMovies.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.loading = false;
      })
      .addCase(searchForMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.selectedMovieDetails = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;

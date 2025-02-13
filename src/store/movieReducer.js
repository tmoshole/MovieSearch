import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useFetchMovies } from "../services/api/useFetchMovies";
import { useSearchMovies } from "../services/api/useSearchMovies";

export const loadRandomMovies = createAsyncThunk("movies/loadRandom", useFetchMovies);
export const searchForMovies = createAsyncThunk("movies/search", useSearchMovies);

const movieSlice = createSlice({
    name: "movies",
    initialState: { movies: [], searchResults: [], selectedMovie: null },
    reducers: {
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadRandomMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(searchForMovies.fulfilled, (state, action) => {
                state.searchResults = action.payload;
            });
    },
});

export const { setSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;

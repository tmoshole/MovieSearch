import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useFetchMovies } from "../services/api/useFetchMovies";
import { useSearchMovies } from "../services/api/useSearchMovies";

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
            });
    },
});

export const { setSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;

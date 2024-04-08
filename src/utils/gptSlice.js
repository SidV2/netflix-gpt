import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    moviesLoading: false
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    changeMoviesLoadingStatus: (state, action) => {
      state.moviesLoading = action.payload;
    }
  },
});

export const { toggleGptSearchView, addGptMovieResult, changeMoviesLoadingStatus } = gptSlice.actions;

export default gptSlice.reducer;
import { types } from "../types";
import axios from "axios";

// action creators
export const setMovies = (payload) => ({
  type: types.movies.GET_MOVIES,
  payload,
});

export const resetMovies = () => ({
  type: types.movies.RESET_MOVIES,
});

export const setMoviesInCategory = (payload) => ({
  type: types.movies.GET_MOVIES_IN_CATEGORY,
  payload,
});

export const setMovie = (payload) => ({
  type: types.movies.GET_MOVIE,
  payload,
});
export const setLoad = (payload) => ({
  type: types.movies.MOVIES_LOADING,
  payload,
});

export const setUserFavoriteMovies = (payload) => ({
  type: types.movies.GET_USER_FAVORITE_MOVIES,
  payload,
});

// actions

export const getMovies = () => async (dispatch) => {
  try {
    dispatch(setLoad(true));
    const result = await axios.get("movies");
    dispatch(setMovies(result.data.movies));
    dispatch(setLoad(false));
  } catch (error) {
    dispatch(setLoad(false));
  }
};

export const getMoviesInCategory = (catId) => async (dispatch) => {
  try {
    dispatch(setLoad(true));
    const result = await axios.get(`movies/category/${catId}`);
    dispatch(setMoviesInCategory(result.data.movies));
    dispatch(setLoad(false));
  } catch (error) {
    dispatch(setLoad(false));
  }
};

export const getMovie = (id) => async (dispatch) => {
  try {
    dispatch(setLoad(true));
    const result = await axios.get(`movies/${id}`);
    dispatch(setMovie(result.data.movie[0]));
    dispatch(setLoad(false));
  } catch (error) {
    dispatch(setLoad(false));
  }
};

export const getUserFavoriteMovies = (movies) => async (dispatch) => {
  try {
    dispatch(setLoad(true));
    const result = await axios.put("movies/favorites", movies);
    dispatch(setUserFavoriteMovies(result.data.movies));
    dispatch(setLoad(false));
  } catch (error) {
    dispatch(setLoad(false));
  }
};

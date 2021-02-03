import { types } from "../types";
import axios from "axios";
import { setAppLoading } from "./appActions";

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

export const setUserFavoriteMovies = (payload) => ({
  type: types.movies.GET_USER_FAVORITE_MOVIES,
  payload,
});

// actions
export const getMovies = () => async (dispatch) => {
  try {
    dispatch(setAppLoading(true));
    const result = await axios.get("movies");
    dispatch(setMovies(result.data.movies));
    dispatch(setAppLoading(false));
    dispatch({
      type: types.app.LOAD_APP,
      payload: false,
    });
  } catch (error) {}
};

export const getMoviesInCategory = (catId) => async (dispatch) => {
  try {
    dispatch(setAppLoading(true));
    const result = await axios.get(`movies/category/${catId}`);
    dispatch(setMoviesInCategory(result.data.movies));
    dispatch(setAppLoading(false));
  } catch (error) {}
};

export const getMovie = (id) => async (dispatch) => {
  try {
    dispatch(setAppLoading(true));
    const result = await axios.get(`movies/${id}`);
    dispatch(setMovie(result.data.movie[0]));
    dispatch(setAppLoading(false));
  } catch (error) {}
};

export const getUserFavoriteMovies = (movies) => async (dispatch) => {
  try {
    dispatch(setAppLoading(true));
    const result = await axios.put("movies/favorites", movies);
    dispatch(setUserFavoriteMovies(result.data.movies));
    dispatch(setAppLoading(false));
  } catch (error) {}
};

import { types } from "../types";
import axios from "axios";
import { setAppLoading } from "./appActions";
import message from "../../utils/message";

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

export const setUserWatchingMovies = (payload) => ({
  type: types.movies.GET_USER_WATCHING_MOVIES,
  payload,
});

// actions
export const getMovies = (data) => async (dispatch) => {
  const config = {
    headers: {
      limit: data && data.limit ? data.limit : 12,
      page: data && data.page ? data.page : 1,
    },
  };

  try {
    dispatch(setAppLoading(true));
    const res = await axios.get("movies", config);
    dispatch(setMovies(res.data.movies));
    dispatch(setAppLoading(false));
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const getMoviesInCategory = (catId) => async (dispatch) => {
  try {
    dispatch(setAppLoading(true));
    const res = await axios.get(`movies/category/${catId}`);
    dispatch(setMoviesInCategory(res.data.movies));
    dispatch(setAppLoading(false));
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const getMovie = (id) => async (dispatch) => {
  try {
    dispatch(setAppLoading(true));
    const res = await axios.get(`movies/${id}`);
    dispatch(setMovie(res.data.movie[0]));
    dispatch(setAppLoading(false));
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const getUserFavoriteMovies = (movies) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
      movies,
    },
  };

  try {
    dispatch(setAppLoading(true));
    const res = await axios.get("movies/favorites", config);
    dispatch(setUserFavoriteMovies(res.data.movies));
    dispatch(setAppLoading(false));
  } catch (error) {
    message.error(error.response.data.message);
  }
};

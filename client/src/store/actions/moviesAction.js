import { types } from "../types";
import axios from "axios";

export const setMovies = (payload) => ({
  type: types.movies.GET_MOVIES,
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

import { types } from "./types";
import axios from "axios";

export const setMovies = (payload) => ({ type: types.GET_MOVIES, payload });
export const setLoad = (payload) => ({ type: types.MOVIES_LOADED, payload });

export const getMovies = () => async (dispatch) => {
  try {
    dispatch(setLoad(true));
    const result = await axios.get("/movies");
    dispatch(setMovies(result.data.movies));
    dispatch(setLoad(false));
  } catch (error) {
    dispatch(setLoad(false));
  }
};

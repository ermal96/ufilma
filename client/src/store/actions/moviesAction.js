import { types } from "./types";
import axios from "axios";

export const getMovies = () => async (dispatch) => {
  let movies = [];

  try {
    const res = await axios.get("http://localhost:5000/movies");
    movies = res.data.data;
  } catch (error) {}

  dispatch({
    type: types.GET_MOVIES,
    payload: movies,
  });
};

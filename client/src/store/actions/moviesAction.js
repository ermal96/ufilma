import { types } from "./types";
import axios from "axios";

export const getMovies = () => async (dispatch) => {
  let movies = [];

  try {
    const res = await axios.get("/movies");
    movies = res.data.data;
  } catch (error) {}

  dispatch({
    type: types.GET_MOVIES,
    payload: movies,
  });
};

export const addMovie = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/upload", data);
    console.log(res);
  } catch (error) {
    dispatch({
      type: types.ADD_MOVIE,
    });
  }
};

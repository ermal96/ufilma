import { types } from "../types";
import axios from "axios";

export const searchMovies = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(`search/${name}`);

    dispatch({
      type: types.search.GET_SEARCH_MOVIES,
      payload: data.movies,
    });
  } catch (error) {
    console.log("something went wrong");
  }
};

import { types } from "../types";
import axios from "axios";

export const searchMovies = ({ name }) => async (dispatch) => {
  try {
    const { data } = axios.post("/search", name);

    dispatch({
      type: types.search.GET_SEARCH_MOVIES,
      payload: data,
    });
  } catch (error) {
    console.log("something went wrong");
  }
};

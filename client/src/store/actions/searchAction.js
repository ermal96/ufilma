import { types } from "../types";
import axios from "axios";
import message from "../../utils/message";

export const searchMovies = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(`search/${name}`);

    dispatch({
      type: types.search.GET_SEARCH_MOVIES,
      payload: data.movies,
    });
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const resetSearch = () => async (dispatch) => {
  try {
    dispatch({
      type: types.search.RESET_SEARCH,
    });
  } catch (error) {}
};

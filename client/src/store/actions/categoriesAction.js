import { types } from "../types";
import { setAppLoading } from "./appActions";
import axios from "axios";
import message from "../../utils/message";

// action creators
export const setCategories = (payload) => ({
  type: types.categories.GET_CATEGORIES,
  payload,
});
export const setCategory = (payload) => ({
  type: types.categories.GET_CATEGORY,
  payload,
});

// actions
export const getCategories = () => async (dispatch) => {
  try {
    dispatch(setAppLoading(true));
    const result = await axios.get("categories");
    dispatch(setCategories(result.data.categories));
    dispatch(setAppLoading(false));
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const getCategory = (id) => async (dispatch) => {
  try {
    dispatch(setAppLoading(true));
    const result = await axios.get(`categories/${id}`);
    dispatch(setCategory(result.data.category[0]));
    dispatch(setAppLoading(false));
  } catch (error) {
    message.error(error.response.data.message);
  }
};

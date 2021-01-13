import { types } from "./types";
import axios from "axios";

export const setCategories = (payload) => ({
  type: types.GET_CATEGORIES,
  payload,
});
export const setCategory = (payload) => ({ type: types.GET_CATEGORY, payload });
export const setLoad = (payload) => ({
  type: types.CATEGORIES_LOADED,
  payload,
});

export const removeCategory = (payload) => ({
  type: types.DELETE_CATEGORY,
  payload,
});

export const getCategories = () => async (dispatch) => {
  try {
    dispatch(setLoad(true));
    const result = await axios.get("/categories");
    dispatch(setCategories(result.data.categories));
    dispatch(setLoad(false));
  } catch (error) {
    dispatch(setLoad(false));
  }
};

export const getCategory = (id) => async (dispatch) => {
  try {
    dispatch(setLoad(true));
    const result = await axios.get(`/categories/${id}`);
    dispatch(setCategory(result.data.category[0]));
    dispatch(setLoad(false));
  } catch (error) {
    dispatch(setLoad(false));
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    await axios.delete(`/categories/${id}`);
    dispatch(removeCategory(id));
  } catch (error) {
    dispatch(setLoad(false));
  }
};

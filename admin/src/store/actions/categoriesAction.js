import { types } from "./types";
import axios from "axios";
import { ErrorMsg, SuccessMsg } from "../../helpers";

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

export const createCategory = (payload) => ({
  type: types.ADD_CATEGORY,
  payload,
});

export const updateCat = (payload) => ({
  type: types.UPDATE_CATEGIRY,
  payload,
});

export const setError = (payload) => ({
  type: types.CATEGORY_ERROR,
  payload,
});

export const getCategories = () => async (dispatch) => {
  try {
    dispatch(setLoad(true));
    const result = await axios.get("categories");
    dispatch(setCategories(result.data.categories));
    dispatch(setLoad(false));
  } catch (error) {
    dispatch(setLoad(false));
    ErrorMsg("Something went wrong please try aggain latter");
  }
};

export const getCategory = (id) => async (dispatch) => {
  try {
    dispatch(setLoad(true));
    const result = await axios.get(`categories/${id}`);
    dispatch(setCategory(result.data.category[0]));
    dispatch(setLoad(false));
  } catch (error) {
    dispatch(setLoad(false));
    ErrorMsg("Something went wrong please try aggain latter");
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    await axios.delete(`categories/${id}`);
    dispatch(removeCategory(id));
    SuccessMsg("Deleted successfully");
  } catch (error) {
    ErrorMsg("Something went wrong please try aggain latter");
  }
};

export const addCategory = (data) => async (dispatch) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  let formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("thumbnail", data.thumbnail);
  formData.append("cover", data.cover);

  try {
    dispatch(setError(true));
    dispatch(createCategory());
    await axios.post("categories", formData, config);
    SuccessMsg("Created successfully");
    dispatch(setError(false));
  } catch (error) {
    ErrorMsg("Something went wrong please try aggain latter");
  }
};

export const updateCategory = (data) => async (dispatch) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  let formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("thumbnail", data.thumbnail);
  formData.append("cover", data.cover);

  try {
    dispatch(setError(true));
    dispatch(updateCat());
    await axios.put(`categories/${data.id}`, formData, config);
    SuccessMsg("Updated successfully");
    dispatch(setError(false));
  } catch (error) {
    ErrorMsg("Something went wrong please try aggain latter");
  }
};

import { types } from "./types";
import axios from "axios";
import { ErrorMsg } from "../../helpers";

export const setImages = (payload) => ({
  type: types.GET_IMAGES,
  payload,
});

export const getImages = () => async (dispatch) => {
  try {
    const result = await axios.get("/images");
    dispatch(setImages(result.data.images));
  } catch (error) {
    ErrorMsg("Something went wrong please try aggain latter");
  }
};

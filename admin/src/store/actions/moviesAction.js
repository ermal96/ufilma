import { types } from "./types";
import axios from "axios";
import { ErrorMsg, SuccessMsg } from "../../helpers";

export const setMovies = (payload) => ({ type: types.GET_MOVIES, payload });
export const setMovie = (payload) => ({ type: types.GET_MOVIE, payload });
export const removeMovie = (payload) => ({ type: types.DETELE_MOVIE, payload });
export const setLoad = (payload) => ({ type: types.MOVIES_LOADED, payload });

export const createMovie = (payload) => ({
  type: types.ADD_MOVIE,
  payload,
});

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

export const getMovie = (id) => async (dispatch) => {
  try {
    dispatch(setLoad(true));
    const result = await axios.get(`/movies/${id}`);
    dispatch(setMovie(result.data.movie[0]));
    dispatch(setLoad(false));
  } catch (error) {
    dispatch(setLoad(false));
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    await axios.delete(`/movies/${id}`);
    dispatch(removeMovie(id));
  } catch (error) {
    dispatch(setLoad(false));
  }
};

export const addMovie = (data) => async (dispatch) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  let formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("year", data.year);
  formData.append("ratio", data.ratio);
  formData.append("image", data.image);
  formData.append("trailerUrl", data.trailerUrl);
  formData.append("time", data.time);
  //formData.append("videoUrl", data.videoUrl);
  formData.append("categories", data.categories);

  try {
    dispatch(createMovie());

    await axios.post("/movies", formData, config);
    SuccessMsg("Created successfully");
  } catch (error) {
    ErrorMsg("Something went wrong please try aggain latter");
  }
};

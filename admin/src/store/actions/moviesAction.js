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

export const updMovie = (payload) => ({
  type: types.UPDATE_MOVIE,
  payload,
});

export const setError = (payload) => ({
  type: types.MOVIE_ERROR,
  payload,
});

export const getMovies = () => async (dispatch) => {
  try {
    dispatch(setLoad(true));
    const result = await axios.get("movies");
    dispatch(setMovies(result.data.movies));
  } catch (error) {
    ErrorMsg(error.response.data.message);
  }
};

export const getMovie = (id) => async (dispatch) => {
  try {
    dispatch(setLoad(true));
    const result = await axios.get(`movies/${id}`);
    dispatch(setMovie(result.data.movie[0]));
  } catch (error) {
    ErrorMsg(error.response.data.message);
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`movies/${id}`, config);
    dispatch(removeMovie(id));
    SuccessMsg("Filmi u fshi me sukses ");
  } catch (error) {
    ErrorMsg(error.response.data.message);
  }
};

export const addMovie = (data) => async (dispatch) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      authorization: localStorage.getItem("token"),
    },
  };

  let formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("year", data.year);
  formData.append("ratio", data.ratio);
  formData.append("thumbnail", data.thumbnail);
  formData.append("cover", data.cover);
  formData.append("time", data.time);
  formData.append("quality", data.quality);
  formData.append("videoUrl", data.videoUrl);

  if (data.categories) {
    data.categories.forEach((category) => {
      formData.append("categories", category);
    });
  }

  try {
    dispatch(setError(true));
    dispatch(createMovie());
    await axios.post("movies", formData, config);
    SuccessMsg("Filmi u krijua me sukses");
    dispatch(setError(false));
  } catch (error) {
    ErrorMsg(error.response.data.message);
  }
};

export const updateMovie = (data) => async (dispatch) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      authorization: localStorage.getItem("token"),
    },
  };

  let formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("year", data.year);
  formData.append("ratio", data.ratio);
  formData.append("thumbnail", data.thumbnail);
  formData.append("cover", data.cover);
  formData.append("time", data.time);
  formData.append("quality", data.quality);
  formData.append("videoUrl", data.videoUrl);

  if (data.categories) {
    data.categories.forEach((category) => {
      formData.append("categories", category);
    });
  }

  try {
    dispatch(setError(true));
    dispatch(updMovie());
    await axios.put(`movies/${data.id}`, formData, config);
    SuccessMsg("Filmi u modifikua me sukses");
    dispatch(setError(false));
  } catch (error) {
    ErrorMsg(error.response.data.message);
  }
};

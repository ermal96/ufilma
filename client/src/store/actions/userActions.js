import { types } from "../types";
import axios from "axios";
import message from "../../utils/message";

// actions creators
export const setUser = (payload) => ({ type: types.user.SET_USER, payload });
export const setFavoritesMovie = (payload) => ({
  type: types.user.SET_FAVORITE_MOVIE,
  payload,
});

export const setWatching = (payload) => ({
  type: types.user.SET_WATCHING,
  payload,
});

export const updUser = (payload) => ({
  type: types.user.UPDATE_USER,
  payload,
});

// actions
export const updateUser = (user) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  try {
    const result = await axios.post("users/edit-account", user, config);
    dispatch(updUser(result.data));

    message.success("Profili u ndryshua me sukses");
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const fetchUser = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("auth/login", userInfo);
    localStorage.setItem("token", result.data.token);

    dispatch(setFavoritesMovie(result.data.user.favorites));
    dispatch(setWatching(result.data.user.watching));

    dispatch(
      setUser({
        name: result.data.user.name,
        email: result.data.user.email,
        id: result.data.user.id,
      })
    );

    message.success(`Miresevjen ${result.data.user.name}`);
  } catch (error) {
    message.error(error.response.data.message);
    localStorage.clear();
  }
};

export const signUserUp = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("auth/register", userInfo);
    localStorage.setItem("token", result.data.token);

    dispatch(setFavoritesMovie(result.data.user.favorites));

    dispatch(
      setUser({
        name: result.data.user.name,
        email: result.data.user.email,
        id: result.data.user.id,
      })
    );
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const autoLogin = () => async (dispatch) => {
  try {
    const result = await axios.get("auth/auto_login");
    localStorage.setItem("token", result.data.token);

    dispatch(setFavoritesMovie(result.data.user.favorites));
    dispatch(setWatching(result.data.user.watching));

    dispatch(
      setUser({
        name: result.data.user.name,
        email: result.data.user.email,
        id: result.data.user.id,
      })
    );
  } catch (error) {
    localStorage.clear();
  }
};

export const addWatching = (data) => async (dispatch) => {
  try {
    await axios.post("users/add-watching", data);
  } catch (error) {}
};

export const getWatching = (data) => async (dispatch) => {
  try {
    const result = await axios.post("users/get-watching", data);
    dispatch(setWatching(result.data.watching));
  } catch (error) {}
};

export const addFavorite = (data) => async (dispatch) => {
  const config = {
    headers: {
      authorization: data.token,
    },
  };

  try {
    const result = await axios.put(
      "users/add-favorite",
      {
        userId: data.userId,
        movieId: data.movieId,
      },
      config
    );

    dispatch(setFavoritesMovie(result.data.user.favorites));
  } catch (error) {}
};

export const removeFavorite = (data) => async (dispatch) => {
  const config = {
    headers: {
      authorization: data.token,
    },
  };

  try {
    const result = await axios.put(
      "users/remove-favorite",
      {
        userId: data.userId,
        movieId: data.movieId,
      },
      config
    );

    dispatch(setFavoritesMovie(result.data.user.favorites));
  } catch (error) {}
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: types.user.LOG_OUT,
  });
};

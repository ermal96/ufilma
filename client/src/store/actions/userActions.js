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

export const setError = (payload) => ({
  type: types.user.SET_ERROR,
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
    const res = await axios.post("users/edit-account", user, config);
    dispatch(updUser(res.data));

    message.success("Profili u ndryshua me sukses");
    dispatch(setError(false));
  } catch (error) {
    dispatch(setError(true));
    message.error(error.response.data.message);
  }
};

export const fetchUser = (userInfo) => async (dispatch) => {
  try {
    const res = await axios.post("auth/login", userInfo);
    localStorage.setItem("token", res.data.token);

    dispatch(setFavoritesMovie(res.data.user.favorites));
    dispatch(setWatching(res.data.user.watching));

    dispatch(
      setUser({
        name: res.data.user.name,
        email: res.data.user.email,
        id: res.data.user.id,
      })
    );

    message.success(`Miresevjen ${res.data.user.name}`);
  } catch (error) {
    message.error(error.response.data.message);
    localStorage.clear();
  }
};

export const signUserUp = (userInfo) => async (dispatch) => {
  try {
    const res = await axios.post("auth/register", userInfo);

    console.log(res.data);
    localStorage.setItem("token", res.data.token);

    dispatch(setFavoritesMovie(res.data.user.favorites));

    dispatch(
      setUser({
        name: res.data.user.name,
        email: res.data.user.email,
        id: res.data.user.id,
      })
    );
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const autoLogin = () => async (dispatch) => {
  try {
    const res = await axios.get("auth/auto_login");
    localStorage.setItem("token", res.data.token);

    dispatch(setFavoritesMovie(res.data.user.favorites));
    dispatch(setWatching(res.data.user.watching));

    dispatch(
      setUser({
        name: res.data.user.name,
        email: res.data.user.email,
        id: res.data.user.id,
      })
    );
  } catch (error) {
    localStorage.clear();
    message.error(error.response.data.message);
  }
};

export const addWatching = (data) => async (dispatch) => {
  try {
    await axios.post("users/add-watching", data);
  } catch (error) {}
};

export const getWatching = (data) => async (dispatch) => {
  try {
    const res = await axios.post("users/get-watching", data);
    dispatch(setWatching(res.data.watching));
  } catch (error) {}
};

export const addFavorite = (data) => async (dispatch) => {
  const config = {
    headers: {
      authorization: data.token,
    },
  };

  try {
    const res = await axios.put(
      "users/add-favorite",
      {
        userId: data.userId,
        movieId: data.movieId,
      },
      config
    );

    dispatch(setFavoritesMovie(res.data.user.favorites));
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const removeFavorite = (data) => async (dispatch) => {
  const config = {
    headers: {
      authorization: data.token,
    },
  };

  try {
    const res = await axios.put(
      "users/remove-favorite",
      {
        userId: data.userId,
        movieId: data.movieId,
      },
      config
    );

    dispatch(setFavoritesMovie(res.data.user.favorites));
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: types.user.LOG_OUT,
  });
};

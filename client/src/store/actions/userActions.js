import { types } from "../types";
import axios from "axios";
import message from "../../utils/message";

export const setUser = (payload) => ({ type: types.user.SET_USER, payload });
export const setLoad = (payload) => ({ type: types.user.USER_LOADED, payload });
export const setError = (payload) => ({ type: types.user.SET_ERROR, payload });
export const setFavoritesMovie = (payload) => ({
  type: types.user.SET_FAVORITE_MOVIE,
  payload,
});

export const fetchUser = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("auth/login", userInfo);
    localStorage.setItem("token", result.data.token);

    dispatch(
      setUser({
        name: result.data.user.name,
        email: result.data.user.email,
        id: result.data.user.id,
      })
    );
    dispatch(setLoad(true));
    message.success(`Welcome ${result.data.user.name}`);
  } catch (error) {
    message.error(error.response.data.message);
    localStorage.clear();
  }
};

export const signUserUp = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("auth/register", userInfo);
    localStorage.setItem("token", result.data.token);

    dispatch(
      setUser({
        name: result.data.user.name,
        email: result.data.user.email,
        id: result.data.user.id,
      })
    );
    dispatch(setFavoritesMovie(result.data.user.favorites));
    dispatch(setLoad(true));
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const autoLogin = () => async (dispatch) => {
  try {
    const result = await axios.get("auth/auto_login");
    localStorage.setItem("token", result.data.token);

    dispatch(
      setUser({
        name: result.data.user.name,
        email: result.data.user.email,
        id: result.data.user.id,
      })
    );
    dispatch(setFavoritesMovie(result.data.user.favorites));
    dispatch(setLoad(true));
  } catch (error) {
    dispatch(setLoad(true));
    localStorage.clear();
  }
};

export const addFavorite = (data) => async (dispatch) => {
  try {
    const result = await axios.put("users/add-favorite", data);

    dispatch(setFavoritesMovie(result.data.user.favorites));
  } catch (error) {}
};

export const removeFavorite = (data) => async (dispatch) => {
  try {
    const result = await axios.put("users/remove-favorite", data);

    dispatch(setFavoritesMovie(result.data.user.favorites));
  } catch (error) {}
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: types.user.LOG_OUT,
  });

  dispatch(setLoad(true));

  message.success(`You have sucessully loggout`);
};

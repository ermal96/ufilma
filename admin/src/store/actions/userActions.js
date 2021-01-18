import { types } from "./types";
import axios from "axios";

export const setUser = (payload) => ({ type: types.SET_USER, payload });
export const setLoad = (payload) => ({ type: types.USER_LOADED, payload });
export const setError = (payload) => ({ type: types.SET_ERROR, payload });

export const fetchUser = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("/auth/login", userInfo);
    localStorage.setItem("token", result.data.token);

    dispatch(setUser(result.data.user));
  } catch (error) {
    dispatch(setError(error.response));
  }
};

export const signUserUp = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("/auth/register", userInfo);
    localStorage.setItem("token", result.data.token);

    dispatch(setUser(result.data.user));
  } catch (error) {
    dispatch(setError(error.response.data.message));
  }
};

export const autoLogin = () => async (dispatch) => {
  try {
    const result = await axios.get("/auth/auto_login");
    localStorage.setItem("token", result.data.token);

    dispatch(setUser(result.data.user));
    dispatch(setLoad(true));
  } catch (error) {
    dispatch(setLoad(true));
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: types.LOG_OUT,
  });

  dispatch(setLoad(true));
};

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(setLoad(true));
    const result = await axios.get("/users");

    dispatch({
      type: types.GET_USERS,
      payload: result.data.users,
    });
  } catch (error) {
    dispatch(setLoad(false));
  }
};

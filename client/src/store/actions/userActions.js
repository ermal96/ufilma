import { types } from "../types";
import axios from "axios";

export const setUser = (payload) => ({ type: types.user.SET_USER, payload });
export const setToken = (payload) => ({ type: types.user.SET_TOKEN, payload });
export const setLoad = (payload) => ({ type: types.user.USER_LOADED, payload });
export const setError = (payload) => ({ type: types.user.SET_ERROR, payload });

export const fetchUser = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("/auth/login", userInfo);
    localStorage.setItem("token", result.data.token);

    dispatch(setUser(result.data.user));
    dispatch(setToken(result.data.token));
    dispatch(setLoad(true));
  } catch (error) {
    dispatch(setError(error.response));
  }
};

export const signUserUp = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("/auth/register", userInfo);
    localStorage.setItem("token", result.data.token);

    dispatch(setUser(result.data.user));
    dispatch(setToken(result.data.token));
    dispatch(setLoad(true));
  } catch (error) {
    dispatch(setError(error.response.data.message));
  }
};

export const autoLogin = () => async (dispatch) => {
  try {
    const result = await axios.get("/auth/auto_login");
    localStorage.setItem("token", result.data.token);

    dispatch(setUser(result.data.user));
    dispatch(setToken(result.data.token));
    dispatch(setLoad(true));
  } catch (error) {
    dispatch(setLoad(true));
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: types.user.LOG_OUT,
  });

  dispatch(setLoad(true));
};

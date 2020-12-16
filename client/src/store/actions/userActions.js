import { types } from "./types";
import axios from "axios";

export const fetchUser = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("/auth/login", userInfo);
    localStorage.setItem("token", result.data.token);

    dispatch({
      type: types.SET_USER,
      payload: result.data.user,
    });
  } catch (error) {}
};

export const signUserUp = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("/auth/register", userInfo);
    localStorage.setItem("token", result.data.token);

    dispatch({
      type: types.SET_USER,
      payload: result.data.user,
    });
  } catch (error) {}
};

export const autoLogin = () => async (dispatch) => {
  try {
    const result = await axios.get("/auth/auto_login");
    localStorage.setItem("token", result.data.token);

    dispatch({
      type: types.SET_USER,
      payload: result.data.user,
    });

    dispatch({
      type: types.USER_LOADED,
      payload: true,
    });
  } catch (error) {
    dispatch({
      type: types.USER_LOADED,
      payload: true,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: types.LOG_OUT,
  });
};

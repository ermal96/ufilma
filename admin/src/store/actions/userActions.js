import { types } from "./types";
import axios from "axios";
import { ErrorMsg } from "../../helpers";

export const setUser = (payload) => ({ type: types.SET_USER, payload });
export const setLoad = (payload) => ({ type: types.USER_LOADED, payload });
export const setError = (payload) => ({ type: types.SET_ERROR, payload });

export const fetchUser = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("auth/login_admin", userInfo);
    localStorage.setItem("token", result.data.token);

    dispatch(setUser(result.data.user));
  } catch (error) {
    ErrorMsg(error.response.data.message);
    localStorage.clear();
  }
};

export const autoLogin = () => async (dispatch) => {
  try {
    const result = await axios.get("auth/auto_login");
    localStorage.setItem("token", result.data.token);

    dispatch(setUser(result.data.user));
    dispatch(setLoad(true));
  } catch (error) {
    dispatch(setLoad(true));
    localStorage.clear();
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: types.LOG_OUT,
  });

  dispatch(setLoad(true));
};

export const getUsers = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  try {
    dispatch(setLoad(true));
    const result = await axios.get("users", config);

    dispatch({
      type: types.GET_USERS,
      payload: result.data.users,
    });
  } catch (error) {
    dispatch(setLoad(false));
  }
};

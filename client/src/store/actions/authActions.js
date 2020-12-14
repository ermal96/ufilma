import { types } from "./types";
import axios from "axios";

export const login = (data) => async (dispatch) => {
  let user = {};

  try {
    const res = await axios.post("/auth/login", data);
    const token = res.data.token;
    localStorage.setItem("token", token);
    user = token;
  } catch (error) {}

  dispatch({
    type: types.LOGIN,
    payload: user,
  });
};

export const regiser = (data) => async (dispatch) => {};

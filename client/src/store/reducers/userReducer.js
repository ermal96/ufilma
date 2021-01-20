import { types } from "../types";

const defaultState = {
  loggedIn: false,
  loaded: false,
  user: {},
  error: null,
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.user.SET_USER:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };

    case types.user.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case types.user.USER_LOADED:
      return {
        ...state,
        loaded: action.payload,
      };

    case types.user.LOG_OUT:
      localStorage.clear();
      return {
        error: null,
        loggedIn: false,
        user: {},
      };

    default:
      return state;
  }
};

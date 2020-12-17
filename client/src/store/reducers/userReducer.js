import { types } from "../actions/types";

const defaultState = {
  loggedIn: false,
  isLoaded: false,
  user: {},
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };

    case types.USER_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };

    case types.LOG_OUT:
      localStorage.clear();
      return {
        loggedIn: false,
        user: {},
      };

    default:
      return state;
  }
};

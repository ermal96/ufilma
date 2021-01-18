import { types } from "../types";

const defaultState = {
  userDropdown: false,
  search: false,
};

export const headerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.header.SET_USER_DROPDOWN:
      return {
        ...state,
        userDropdown: action.payload,
      };

    case types.header.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};
